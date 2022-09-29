// TC-020
//  Checking the ability to change outbound voice profiles status

const MainPage = require("../pageobjects/main.page");
const LogInPage = require("../pageobjects/login.page");
const ProfilePage = require("../pageobjects/profile.page");

describe(` Checking the ability to change outbound voice profiles status`, () => {
  it(`TC-020  Checking  outbound status changes`, async () => {
    await MainPage.open__siteMainPage();
    await MainPage.click__closeCookieModalWindowButton();
    await MainPage.click__logInButton();

    await LogInPage.input__email.waitForDisplayed({ timeout: 50000 });
    await LogInPage.fill__emailInput();
    await LogInPage.fill__password();
    await LogInPage.click__logInButton();

    await ProfilePage.tab__menuOutboundVoiceProfiles.waitForDisplayed({ timeout: 20000 });
    await ProfilePage.close__popUp__infoModal();
    await ProfilePage.click__tab__menuOutboundVoiceProfiles();
    await ProfilePage.button__outboundVoiceProfilesStatus.waitForDisplayed({ timeout: 20000 });
    await ProfilePage.screenshot__button__outboundVoiceProfilesStatus("before");
    await ProfilePage.click__button__outboundVoiceProfilesStatus();
    await ProfilePage.screenshot__button__outboundVoiceProfilesStatus("after");

    await ProfilePage.message__popupStatusChanged.waitForExist({ timeout: 10000 });
    await ProfilePage.check__message__popupStatusChanged();

    await ProfilePage.click__signOutButton();
  });
});
