// TC-012/TC-013
//  Checking the ability of registration to Waiting List through the link "JOIN THE WAITING"

const MainPage = require("../pageobjects/main.page");
const WaitListPage = require("../pageobjects/waitList.page");

describe(`Checking the ability of registration to Waiting List through the link "JOIN THE WAITING"`, () => {
  it("TC-012 Check registration ability with valid credentials", async () => {
    await MainPage.open__siteMainPage();
    await MainPage.click__closeCookieModalWindowButton();

    await MainPage.click__joinWaitListLink();

    await WaitListPage.check__waitListPageDisplayed();
    await WaitListPage.click__joinWaitListButton();
    await WaitListPage.fill__waitListUserValidData();
    await WaitListPage.mark__receiveTelnyxMarketingEmailsCheckbox();
    await WaitListPage.click__submitButton();
    await WaitListPage.check__submitPageTitle();
  });
  it("TC-013 Check registration ability with invalid email", async () => {
    await MainPage.open__siteMainPage();
    await MainPage.click__closeCookieModalWindowButton();

    await MainPage.click__joinWaitListLink();

    await WaitListPage.check__waitListPageDisplayed();
    await MainPage.click__closeCookieModalWindowButton();
    await WaitListPage.click__joinWaitListButton();

    await WaitListPage.fill__waitListUserInvalidData();
    await WaitListPage.mark__receiveTelnyxMarketingEmailsCheckbox();
    await WaitListPage.click__submitButton();
    await WaitListPage.check__wagningEmailMessage();
  });
});
