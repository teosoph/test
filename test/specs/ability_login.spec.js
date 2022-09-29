// TC-016/TC-017/TC-018
//  Checking the ability to login

const MainPage = require("../pageobjects/main.page");
const LogInPage = require("../pageobjects/login.page");
const ProfilePage = require("../pageobjects/profile.page");

describe(`Checking the ability to login`, () => {
  it(`TC-016 Check login ability with real valid user credentials`, async () => {
    await MainPage.open__siteMainPage();
    await MainPage.click__closeCookieModalWindowButton();
    await MainPage.click__logInButton();

    await LogInPage.input__email.waitForDisplayed({ timeout: 50000 });
    await LogInPage.fill__emailInput();
    await LogInPage.fill__password();
    await LogInPage.click__logInButton();

    await ProfilePage.close__popUp__infoModal();
    await ProfilePage.check__successfulLogin();
    await ProfilePage.click__signOutButton();

    await LogInPage.check__successfulLogOut();
  });
  it("TC-017 Check login ability with invalid email credentials", async () => {
    await MainPage.open__siteMainPage();
    await MainPage.click__closeCookieModalWindowButton();
    await MainPage.click__logInButton();

    await LogInPage.input__email.waitForDisplayed({ timeout: 50000 });
    await LogInPage.fill__emailInputInvalidData();
    await LogInPage.fill__password();
    await LogInPage.click__logInButton();
    await LogInPage.check__loginError();
    await LogInPage.message__popUpError.waitForDisplayed({ timeout: 40000 });
  });
  it("TC-018 Check login ability with invalid password credentials", async () => {
    await MainPage.open__siteMainPage();
    await MainPage.click__closeCookieModalWindowButton();
    await MainPage.click__logInButton();

    await LogInPage.input__email.waitForDisplayed({ timeout: 40000 });
    await LogInPage.fill__emailInput();
    await LogInPage.fill__passwordInputInvalidData();
    await LogInPage.click__logInButton();
    await LogInPage.check__loginError();
    await LogInPage.message__popUpError.waitForDisplayed({ timeout: 40000 });
  });
});
