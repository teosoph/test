// TC-009
//  Checking the ability to talk to an expert

const MainPage = require("../pageobjects/main.page");
const ExpertPage = require("../pageobjects/expert.page");

describe(`Checking the ability to talk to an expert`, () => {
  it("TC-009 Check talk ability with valid credentials", async () => {
    await MainPage.open__siteMainPage();
    await MainPage.click__closeCookieModalWindowButton();

    await MainPage.click__talkToExpertButton();
    await ExpertPage.check__expertTalkPageTitle();
    await ExpertPage.mark__chooseReasonContactDropMenu();
    await ExpertPage.fill__validDataToInputFields();
    await ExpertPage.mark__subscriptionCheckBox();
    await ExpertPage.click__submitButton();
    await ExpertPage.check__validDataEntering();
  });
  it("TC-010 Check talk ability with invalid website data", async () => {
    await MainPage.open__siteMainPage();
    await MainPage.click__closeCookieModalWindowButton();

    await MainPage.click__talkToExpertButton();
    await ExpertPage.check__expertTalkPageTitle();
    await ExpertPage.mark__chooseReasonContactDropMenu();
    await ExpertPage.fill__invalidDataToInputFields();
    await ExpertPage.mark__subscriptionCheckBox();
    await ExpertPage.click__submitButton();
    await ExpertPage.check__invalidWebsiteDataEntering();
  });
});
