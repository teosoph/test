const CommonPage = require("./common.page");

class ProfilePage {
  get popUp__infoModal() {
    return $('//span[@role="button"]');
  }
  async close__popUp__infoModal() {
    if (await this.popUp__infoModal.isDisplayed()) {
      await this.popUp__infoModal.click();
    }
  }

  // TC-016/TC-017/TC-018
  get icon__profile() {
    return $("(//h1/following-sibling::div/div/div/div)[3]");
  }
  get title__profileDropMenu() {
    return $("//div[@class='text-truncate']");
  }
  async check__successfulLogin() {
    await this.icon__profile.moveTo();
    await browser.pause(2000);
    await this.title__profileDropMenu.isDisplayed();
    await expect(this.title__profileDropMenu).toHaveText(CommonPage.validLoginUserData["workEmail"]);
  }
  get button__signOut() {
    return $('//button[contains(text(), "Sign out")]');
  }
  async click__signOutButton() {
    await this.icon__profile.moveTo();
    await this.button__signOut.waitForDisplayed({ timeout: 30000 });
    await this.button__signOut.click();
  }

  //   TC-019
  get tab__menuNumbers() {
    return $('(//a[contains(@href, "/#/app/numbers-redirect")])[2]');
  }
  async click__menuNumbersTab() {
    await this.tab__menuNumbers.click();
  }
  get dropMenu__region() {
    return $('(//label[contains(@class, "Dropdown__Container")]//div)[10]');
  }
  async click__regionDropMenu() {
    await this.dropMenu__region.click();
  }
  get input__region() {
    return $("(//input[@type='text'])[2]");
  }
  async fill__input__region() {
    await this.input__region.addValue("United States of America");
    await browser.keys(["Enter"]);
  }
  get dropMenu__numberFeatures() {
    return $('(//label[contains(@class, "Dropdown__Container")]//div)[22]');
  }
  async click__numberFeaturesDropMenu() {
    await this.dropMenu__numberFeatures.click();
  }

  get input__numberFeatures() {
    return $("(//input[@type='text'])[3]");
  }
  async fill__numberFeaturesDropMenu() {
    await this.input__numberFeatures.addValue("Voice");
    await browser.keys(["Enter"]);
  }
  get button__searchNumbers() {
    return $("//button[@type='submit']");
  }
  async click__buttonSearchNumbers() {
    await this.button__searchNumbers.click();
  }
  get info__searchResult() {
    return $('(//td[contains(text(), "+1")])[1]');
  }
  async check__info__searchResult() {
    await expect(this.info__searchResult).toHaveTextContaining("+1");
  }

  //   TC-020

  get tab__menuVoice() {
    return $('(//button[contains(text(), "Voice")])[2]');
  }
  async click__tab__menuVoice() {
    await this.tab__menuVoice.click();
  }

  get tab__menuOutboundVoiceProfiles() {
    return $('(//a[contains(@href, "/#/app/outbound-profiles")])[2]');
  }
  async click__tab__menuOutboundVoiceProfiles() {
    await this.tab__menuOutboundVoiceProfiles.click();
  }
  get button__outboundVoiceProfilesStatus() {
    return $('//button[@type="button"][@role="switch"]');
  }

  async screenshot__button__outboundVoiceProfilesStatus(index) {
    await this.button__outboundVoiceProfilesStatus.saveScreenshot(`screenshots/screenshot_status-${index}.png`);
  }
  async click__button__outboundVoiceProfilesStatus() {
    await this.button__outboundVoiceProfilesStatus.click();
    await browser.pause(5000);
  }
  get message__popupStatusChanged() {
    return $("div[type='success'] span");
  }
  async check__message__popupStatusChanged() {
    // await browser.getAlertText("Updated Outbound Voice");
    await expect(this.message__popupStatusChanged).toHaveTextContaining("Updated Outbound Voice");
  }

  async getElementText() {
    return await $("div[type='success'] span").getText();
  }
}

module.exports = new ProfilePage();
