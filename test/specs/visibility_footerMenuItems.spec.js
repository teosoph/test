// TC-005
// Checking the visibility of the footer Products menu items

const MainPage = require("../pageobjects/main.page");
const SignUpPage = require("../pageobjects/signUp.page");

describe("Checking the visibility of the footer Products menu items", () => {
  it("TC-005 Check and compare footer menu items", async () => {
    await MainPage.open__siteMainPage();
    await MainPage.click__closeCookieModalWindowButton();
    await MainPage.checkFooterProductsMenuItemsName();
  });
});
