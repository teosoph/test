const СommonPage = require("../pageobjects/common.page");

class SupportPage {
  get title__supportPage() {
    return $('[class="header__headline"]');
  }
  async check__supportPageTitle() {
    await expect(this.title__supportPage).toHaveTextContaining("Support Center");
  }

  get input__search() {
    return $('[class*="search__input"]');
  }
  async fill__searchInput() {
    await this.input__search.setValue(СommonPage.generateRandomData());
  }
  async push__enterKey() {
    await browser.keys(["Enter"]);
  }

  get message__warning() {
    return $('[class="section__content"]');
  }
  async check__SearchInputData() {
    await expect(this.message__warning).toHaveTextContaining(["We couldn't find any articles for: ", `${СommonPage.generateRandomData()}`]);
  }
}

module.exports = new SupportPage();
