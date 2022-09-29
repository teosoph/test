// TC-011
//  Checking the ability to changer value in the “Switch + Save with Telnyx” block

const MainPage = require("../pageobjects/main.page");
const CommonPage = require("../pageobjects/common.page");

describe(`Checking the ability to changer value in the “Switch + Save with Telnyx” block`, () => {
  it("TC-011 Check changer value ability", async () => {
    await MainPage.open__siteMainPage();
    await MainPage.click__closeCookieModalWindowButton();

    await MainPage.scroll__switchSaveWithTelnyxBlock();
    await MainPage.makeScreenshot__compareCostBlock_1();
    await MainPage.click__voiceButton();
    await MainPage.click__tollFreeNumbersRadioButton();
    await MainPage.shift__makeOutboundCallsSlider(CommonPage.mathRandom);
    await MainPage.shift__receiveInboundCallsSlider(CommonPage.mathRandom);
    await MainPage.makeScreenshot__compareCostBlock_2();
  });
});
