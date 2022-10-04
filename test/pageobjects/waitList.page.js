const CommonPage = require("../pageobjects/common.page");

class WaitListPage {
  // TC-012
  //  Checking the ability of registration to Waiting List through the link "JOIN THE WAITING"
  get title__waitListPage() {
    return $(`div>span>span`);
  }
  async check__waitListPageDisplayed() {
    await expect(this.title__waitListPage).toHaveTextContaining("STORAGE");
  }
  get button__joinWaitList() {
    return $(`(//div/div/a[@href="#form"])[1]`);
  }
  async click__joinWaitListButton() {
    await this.button__joinWaitList.click();
  }

  get input__waitListUser_firstName() {
    return $(`[id="FirstName"]`);
  }
  get input__waitListUser_lastName() {
    return $(`[id="LastName"]`);
  }
  get input__waitListUser_email() {
    return $(`[id="Email"]`);
  }
  get input__waitListUser_formAdditionalInformation() {
    return $(`[id="Form_Additional_Information__c"]`);
  }
  async fill__waitListUserValidData() {
    await this.input__waitListUser_firstName.addValue(CommonPage.validUserData["firstName"]);
    await this.input__waitListUser_lastName.addValue(CommonPage.validUserData["lastName"]);
    await this.input__waitListUser_email.addValue(CommonPage.validUserData["workEmail"]);
    await this.input__waitListUser_formAdditionalInformation.addValue("My Additional Information");
  }
  async fill__waitListUserInvalidData() {
    await this.input__waitListUser_firstName.addValue(CommonPage.invalidUserData["firstName"]);
    await this.input__waitListUser_lastName.addValue(CommonPage.invalidUserData["lastName"]);
    await this.input__waitListUser_email.addValue(CommonPage.invalidUserData["workEmail"]);
    await this.input__waitListUser_formAdditionalInformation.addValue(CommonPage.generateRandomData(500));
  }
  get checkbox__receiveTelnyxMarketingEmails() {
    return $(`(//label[@for="Subscription_Opt_In__c"])[2]`);
  }
  async mark__receiveTelnyxMarketingEmailsCheckbox() {
    await this.checkbox__receiveTelnyxMarketingEmails.click();
  }
  get button__submit() {
    return $(`button[type="submit"]`);
  }
  async click__submitButton() {
    await this.button__submit.click();
  }
  get title__submitPage() {
    return $(`//span[contains(text(), "You're on the waitlist!")]`);
  }
  async check__submitPageTitle() {
    await expect(this.title__submitPage).toHaveText("You're on the waitlist!");
  }
  get message__wagningEmail() {
    return $(`[id="ValidMsgEmail"]`);
  }
  async check__wagningEmailMessage() {
    await expect(this.message__wagningEmail).toHaveTextContaining("Must be valid email");
  }
  // async check__wagningEmailMessage() {
  //   if (await this.message__wagningEmail.isDisplayed()) {
  //     (await expect(this.message__wagningEmail).toHaveTextContaining("Invalid Input")) || (await expect(this.message__wagningEmail).toHaveTextContaining("Must be valid email"));
  //   }
  // }
}

module.exports = new WaitListPage();
