class Page {
  open() {
    browser.setWindowSize(1920, 1080);
    browser.url(process.env.BASE_URL);
  }
}

module.exports = new Page();
