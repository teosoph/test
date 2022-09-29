// TC-006
// Checking the redirection to the "Terms & Conditions" page`

const MainPage = require("../pageobjects/main.page");
const SignUpPage = require("../pageobjects/signUp.page");

describe(`Checking the redirection to the "Terms & Conditions" page`, () => {
  it("Check the redirection", async () => {
    await MainPage.open__siteMainPage();
    await MainPage.click__closeCookieModalWindowButton();

    await MainPage.click__OnSignUpButton();

    await SignUpPage.click__termsLink();
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);

    await MainPage.click__closeCookieModalWindowButton();
    await browser.pause(2000);

    await SignUpPage.check__redirectionToTermsPage();
    await SignUpPage.check__messagePresenceOnPage();
  });
});
