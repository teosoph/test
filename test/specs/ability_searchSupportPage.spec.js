// TC-008
// Checking the ability to search in the Support Center page with random data

const MainPage = require("../pageobjects/main.page");
const SupportPage = require("../pageobjects/support.page");

describe(`Checking the ability to search in the Support Center page with random data`, () => {
  it("TC-008 Check search ability", async () => {
    await MainPage.open__siteMainPage();
    await MainPage.click__closeCookieModalWindowButton();

    await MainPage.click__supportCenterLink();
    await SupportPage.check__supportPageTitle();
    await SupportPage.fill__searchInput();
    await SupportPage.push__enterKey();
    await SupportPage.check__SearchInputData();
  });
});
