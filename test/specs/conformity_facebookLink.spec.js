// TC-015
// Checking the conformity of the "Facebook" share link

const MainPage = require("../pageobjects/main.page");

describe(`Checking the conformity of the "Facebook" share link`, () => {
  it(`TC-015 Check the "Facebook" link`, async () => {
    await MainPage.open__siteMainPage();
    await MainPage.click__closeCookieModalWindowButton();

    await MainPage.scroll__footer();
    await MainPage.click__facebookLink();
    await MainPage.check__facebookPageRedirection();
  });
});
