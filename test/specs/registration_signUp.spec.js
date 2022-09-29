// TC-003, TC-004
// Checking the registration possibility through the 'Sign Up' button

const MainPage = require("../pageobjects/main.page");
const SignUpPage = require("../pageobjects/signUp.page");

describe("Checking the registration possibility through the 'Sign Up' button", () => {
  it("TC-003 Check registration with valid credentials", async () => {
    await MainPage.open__siteMainPage();
    await MainPage.click__closeCookieModalWindowButton();
    await MainPage.button__signUp.isDisplayed();
    await MainPage.button__signUp.click();

    await SignUpPage.check__signUpPageOpened();
    await SignUpPage.fill__іnputsFieldsWithValidCredentials();
    await SignUpPage.check__enteredValidData();
    await SignUpPage.click__signUpButton();
    await SignUpPage.message__captcha.waitForDisplayed({ timeout: 10000 });
    await SignUpPage.check__message__captcha();
  });
  it("TC-004 Check registration with invalid email credentials", async () => {
    await MainPage.open__siteMainPage();
    await MainPage.click__closeCookieModalWindowButton();
    await MainPage.button__signUp.isDisplayed();
    await MainPage.button__signUp.click();

    await SignUpPage.button__submit.waitForDisplayed({ timeout: 20000 });
    await MainPage.click__closeCookieModalWindowButton();
    await SignUpPage.check__signUpPageOpened();
    await SignUpPage.fill__inputsFieldsWithInvalidCredentials();
    await SignUpPage.check__messageWarningInvalidEmail();
  });
});
