// TC-019
//  Checking the ability to order a phone numder for USA region

const MainPage = require("../pageobjects/main.page");
const LogInPage = require("../pageobjects/login.page");
const ProfilePage = require("../pageobjects/profile.page");

describe(`Checking the ability to order a phone numder for USA region`, () => {
  it(`TC-019 Check order USA phone number ability`, async () => {
    await MainPage.open__siteMainPage();
    await MainPage.click__closeCookieModalWindowButton();
    await MainPage.click__logInButton();

    await LogInPage.input__email.waitForDisplayed({ timeout: 40000 });
    await LogInPage.fill__emailInput();
    await LogInPage.fill__password();
    await LogInPage.click__logInButton();

    await ProfilePage.close__popUp__infoModal();
    await ProfilePage.click__menuNumbersTab();
    await ProfilePage.close__popUp__infoModal();
    await ProfilePage.click__regionDropMenu();
    await ProfilePage.input__region.waitForDisplayed({ timeout: 10000 });
    await ProfilePage.fill__input__region();
    await browser.pause(5000);
    await ProfilePage.click__numberFeaturesDropMenu();
    await ProfilePage.input__numberFeatures.waitForDisplayed({ timeout: 10000 });
    await ProfilePage.fill__numberFeaturesDropMenu();
    await browser.pause(2000);
    await ProfilePage.button__searchNumbers.waitForClickable();
    await ProfilePage.click__buttonSearchNumbers();
    await ProfilePage.check__info__searchResult();

    await ProfilePage.click__signOutButton();
  });
});
