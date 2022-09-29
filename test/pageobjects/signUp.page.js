const CommonPage = require("../pageobjects/common.page");

class SignUpPage {
  // TC-001, TC-002
  get input__email() {
    return $('[id="email"]');
  }

  // TC-003, TC-004
  get button__submit() {
    return $('button[type="submit"]');
  }
  get input__emailField() {
    return $('[id="email"]');
  }
  get input__fullnameField() {
    return $('[id="full_name"]');
  }
  get input__passwordField() {
    return $('[id="password"]');
  }
  get button__termsAndConditions() {
    return $('[aria-labelledby="terms-label"] rect');
  }
  get button__createAccount() {
    return $('button[type="submit"]');
  }

  get message__warningInvalidEmail() {
    return $('[id="email_error"]');
  }
  // Checking the SignUp page is opened
  async check__signUpPageOpened() {
    await expect(browser).toHaveUrlContaining("sign-up");
    await expect(this.button__submit).toBeDisplayed();
    await expect(this.button__submit).toHaveTextContaining("Create Account");
  }

  // Valid credentials
  async fill__іnputsFieldsWithValidCredentials() {
    await this.input__emailField.setValue(CommonPage.validUserData["workEmail"]);
    await this.input__fullnameField.setValue(CommonPage.validUserData["fullName"]);
    await this.input__passwordField.setValue(CommonPage.validUserData["password"]);
    await this.button__termsAndConditions.click();
  }

  async check__enteredValidData() {
    await expect(this.input__emailField).toHaveValueContaining(CommonPage.validUserData["workEmail"]);
    await expect(this.input__fullnameField).toHaveValueContaining(CommonPage.validUserData["fullName"]);
    await expect(this.input__passwordField).toHaveValueContaining(CommonPage.validUserData["password"]);
  }

  // Invalid credentials
  async fill__inputsFieldsWithInvalidCredentials() {
    await this.input__emailField.setValue(CommonPage.invalidUserData["workEmail"]);
    await this.input__fullnameField.setValue(CommonPage.invalidUserData["fullName"]);
    await this.input__passwordField.setValue(CommonPage.invalidUserData["password"]);
    await this.button__termsAndConditions.click();
  }

  async click__signUpButton() {
    await this.button__createAccount.scrollIntoView();
    await this.button__createAccount.click();
    await browser.pause(5000);
  }

  get message__captcha() {
    return $('//span[contains(text(), "reCAPTCHA")]');
  }
  async check__message__captcha() {
    await expect(this.message__captcha).toHaveTextContaining("reCAPTCHA validation required");
  }

  async check__messageWarningInvalidEmail() {
    await expect(this.message__warningInvalidEmail).toHaveTextContaining("Please enter a valid email address.");
  }

  // TC-006
  get link__termsAndConditions() {
    return $('a[href="/terms-and-conditions-of-service"]');
  }
  get title__termsAndConditions() {
    return $('h1[class*="Text"]');
  }

  async click__termsLink() {
    await this.link__termsAndConditions.click();
  }

  async check__redirectionToTermsPage() {
    await expect(browser).toHaveUrlContaining("/terms-and-conditions-of-service");
  }
  async check__messagePresenceOnPage() {
    await expect(this.title__termsAndConditions).toHaveTextContaining("TELNYX TERMS AND CONDITIONS OF SERVICE");
  }
}

module.exports = new SignUpPage();
