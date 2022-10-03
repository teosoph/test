const Page = require("./page");

class MainPage {
  // Open main page
  async open__siteMainPage() {
    await Page.open();
  }

  // Cookie modal window
  get button__closeCookieModalWindow() {
    return $('[aria-label="close and deny"]');
  }
  async click__closeCookieModalWindowButton() {
    if (await this.button__closeCookieModalWindow.isDisplayed()) {
      await this.button__closeCookieModalWindow.click();
    }
  }

  // TC-001, TC-002
  get input__sighUp() {
    return $('input[name="email"]');
  }
  get buttom__submit() {
    return $('[type="submit"]');
  }

  // TC-003, TC-004
  get button__signUp() {
    return $('li div a[href="/sign-up"]');
  }
  // TC-005
  get list__footerProductMenu() {
    return $(`(//p[text()='Products']/following-sibling::ul//span//span)`);
  }

  item__footerMenuList(i) {
    return $(`(//p[text()='Products']/following-sibling::ul//span//span)[${i + 1}]`);
  }

  items__footerProductsMenu = ["Elastic SIP Trunking", "Call Control - Voice API", "Programmable SMS", "WhatsApp API", "Secure Faxing", "Wireless - Cellular IoT", "Number Lookup", "Global Numbers", "Verify API", "See all Products"];

  async checkFooterProductsMenuItemsName() {
    await this.list__footerProductMenu.scrollIntoView();
    for (let i = 0; i < this.items__footerProductsMenu.length; i++) {
      expect(await this.item__footerMenuList(i)).toHaveTextContaining(`${this.items__footerProductsMenu[i]}`);
    }
  }

  // TC-006
  async click__OnSignUpButton() {
    await this.button__signUp.click();
  }

  //  TC-007
  tabPosition = ["1", "3", "5", "6", "8", "10"];

  tabs__headerMenu(i) {
    return $(`header div>ul>li:nth-child(${this.tabPosition[i]})>span`);
  }

  async hover__headerMenuTabs() {
    for (let i = 0; i < this.tabPosition.length; i++) {
      await this.tabs__headerMenu(i).moveTo();
      await browser.pause(1000);
      await browser.saveScreenshot(`screenshots/headerMenuTab_screenshot_${this.tabPosition[i]}.png`);
    }
  }

  // TC-008
  // Support center
  get link__supportCenter() {
    return $(`audio+a[href*='support']`);
  }
  async click__supportCenterLink() {
    await this.link__supportCenter.moveTo();
    await this.link__supportCenter.click();
  }

  // TC-009
  // Expert Talk page

  get button__talkToExpert() {
    return $(`li>div>a[href*='/contact-us']`);
  }
  async click__talkToExpertButton() {
    await this.button__talkToExpert.click();
    await browser.pause(2000);
  }

  // TC-11
  // Voice Call Costs in the “Switch + Save with Telnyx” block
  get block__switchSaveWithTelnyx() {
    return $("h2>a>span");
  }
  async scroll__switchSaveWithTelnyxBlock() {
    await this.block__switchSaveWithTelnyx.scrollIntoView();
    await browser.pause(5000);
  }
  get block__compareCost() {
    return $("//h2/a/following::div[1]/div/div");
  }
  async makeScreenshot__compareCostBlock_1() {
    await this.block__compareCost.saveScreenshot(`screenshots/compareCosts_screenshot_1.png`);
  }
  get button__voice() {
    return $('//button[contains(text(),"Voice")]');
  }
  async click__voiceButton() {
    await this.button__voice.click();
  }
  get button__tollFreeNumbersRadio() {
    return $('[id="toll-free-numbers"]');
  }
  async click__tollFreeNumbersRadioButton() {
    await this.button__tollFreeNumbersRadio.click();
  }
  get slider__shiftMakeOutboundCalls_1() {
    return $('(//div[@role="slider"])[1]');
  }
  async shift__makeOutboundCallsSlider(shiftIndex) {
    let arrow = "rightarrow".repeat([shiftIndex]);
    await this.slider__shiftMakeOutboundCalls_1.addValue(arrow);
    await browser.pause(2000);
  }
  get slider__shiftMakeOutboundCalls_2() {
    return $('(//div[@role="slider"])[2]');
  }
  async shift__receiveInboundCallsSlider(shiftIndex) {
    let arrow = "\uE012".repeat([shiftIndex]);
    await this.slider__shiftMakeOutboundCalls_2.addValue(arrow);
    await browser.pause(2000);
  }
  async makeScreenshot__compareCostBlock_2() {
    await this.block__compareCost.saveScreenshot(`screenshots/compareCosts-screenshot_2.png`);
  }

  //TC-012/TC-013
  //  Wait List
  get link__joinWaitList() {
    return $('span>a[href="/products/storage"]');
  }
  async click__joinWaitListLink() {
    await this.link__joinWaitList.click();
  }

  // TC-014
  // Registration through the “Switch+Save with Telnyx” block
  get button__createFreeTrialAccount() {
    return $('//a[contains(text(),"Create")]');
  }
  async click__createFreeTrialAccountButton() {
    await this.button__createFreeTrialAccount.click();
  }
  get link__signUpPage() {
    return $('//a[contains(text(),"Create")]');
  }
  async check__redirectedPageForLink() {
    await expect(browser).toHaveUrlContaining("sign-up");
  }
  // TC-015
  // Footer social connections
  get block__footer() {
    return $("(//footer)[3]");
  }
  async scroll__footer() {
    await this.block__footer.scrollIntoView();
  }
  get link__facebook() {
    return $('[href="https://www.facebook.com/Telnyx/"]');
  }
  async click__facebookLink() {
    await this.link__facebook.click();
  }
  async check__facebookPageRedirection() {
    await browser.switchWindow("https://www.facebook.com/Telnyx/");
    await expect(browser).toHaveUrl("https://www.facebook.com/Telnyx/");
  }

  // TC-016/TC-017/TC-018
  get button__logIn() {
    return $('(//a[contains(text(), "Log In")])[1]');
  }
  async click__logInButton() {
    await this.button__logIn.click();
  }
}

module.exports = new MainPage();
