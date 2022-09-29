// TC-014
//  Checking the registrartion ability through the "Create a free trial account" button in the “Switch + Save with Telnyx” block

const MainPage = require("../pageobjects/main.page");

describe(`Checking the registrartion ability through the "Create a free trial account" button in the “Switch + Save with Telnyx” block`, () => {
  it(`TC-014 Check registrartion ability through the "Create a free trial account" button`, async () => {
    await MainPage.open__siteMainPage();
    await MainPage.click__closeCookieModalWindowButton();

    await MainPage.scroll__switchSaveWithTelnyxBlock();
    await MainPage.click__createFreeTrialAccountButton();
    await MainPage.check__redirectedPageForLink();
  });
});
