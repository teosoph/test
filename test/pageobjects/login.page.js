const CommonPage = require("./common.page");

class LogIn {
  // TC-016
  get input__email() {
    return $('(//input[@name="email"])[1]');
  }
  async fill__emailInput() {
    await this.input__email.addValue(CommonPage.validLoginUserData["workEmail"]);
  }
  get input__password() {
    return $('//input[@name="password"]');
  }
  async fill__password() {
    await this.input__password.addValue(CommonPage.validLoginUserData["password"]);
  }
  get button__logIn() {
    return $('(//button[contains(text(), "Log in")])[2]');
  }
  async click__logInButton() {
    await this.button__logIn.waitForClickable({ timeout: 20000 });
    await this.button__logIn.click();
  }
  async check__successfulLogOut() {
    await this.input__email.isDisplayed();
  }
  //   TC-017
  async fill__emailInputInvalidData() {
    await this.input__email.addValue(CommonPage.invalidLoginUserData["workEmail"]);
  }
  get message__popUpError() {
    return $('//span[contains(text(), "That email and password combination is not valid")]');
  }
  async check__loginError() {
    await this.message__popUpError.isDisplayed();
  }
  // TC-018
  async fill__passwordInputInvalidData() {
    await this.input__password.addValue(CommonPage.invalidLoginUserData["password"]);
  }
}

module.exports = new LogIn();
