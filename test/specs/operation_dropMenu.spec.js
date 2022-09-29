// TC-007
// Checking the operation of the dropdown menu in the header

const MainPage = require("../pageobjects/main.page");
const SignUpPage = require("../pageobjects/signUp.page");

describe(`Checking the operation of the dropdown menu in the header`, () => {
  it("TC-007 Check operation", async () => {
    await MainPage.open__siteMainPage();
    await MainPage.click__closeCookieModalWindowButton();

    await MainPage.hover__headerMenuTabs();
  });
});
