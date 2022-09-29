// TC-001, TC-002
// Checking the registration possibility through `Try for free ->` field

const MainPage = require("../pageobjects/main.page");
const SignUpPage = require("../pageobjects/signUp.page");

const valid_testEmail = "test123@ua.com";
const invalid_testEmail = "test123@ua";

describe("Checking the registration possibility through `Try for free ->` field", () => {
  it("TC-001 Check registration with valid credentials", async () => {
    await MainPage.open__siteMainPage();
    await MainPage.click__closeCookieModalWindowButton();

    await MainPage.input__sighUp.waitForDisplayed({ timeout: 5000 });
    await MainPage.input__sighUp.addValue(valid_testEmail);
    await expect(MainPage.input__sighUp).toHaveValueContaining(valid_testEmail);
    await MainPage.buttom__submit.click();
    await browser.pause(5000);
    await expect(browser).toHaveUrlContaining("sign-up");
    await expect(SignUpPage.input__email).toHaveValueContaining(valid_testEmail);
  });
  it("TC-002 Check registration with invalid credentials", async () => {
    await MainPage.open__siteMainPage();
    await MainPage.click__closeCookieModalWindowButton();

    await MainPage.input__sighUp.waitForDisplayed({ timeout: 5000 });
    await MainPage.input__sighUp.addValue(invalid_testEmail);
    await expect(MainPage.input__sighUp).toHaveValueContaining(invalid_testEmail);
    await MainPage.buttom__submit.click();
    await browser.pause(5000);
    await expect(browser).toHaveUrlContaining("sign-up");
    await expect(SignUpPage.input__email).toHaveValueContaining(invalid_testEmail);
  });
});
