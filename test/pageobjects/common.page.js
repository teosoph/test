class CommonPage {
  // ================= Random Data ==========================
  chars = "abcsefghijklmnopqrstuvwxyz1234567890";
  string = "";
  mathRandom = Math.random() * 15;

  generateRandomData(mathRandom) {
    if (mathRandom > 1) {
      for (let i = 0; i <= mathRandom; i++) {
        this.string += this.chars[Math.floor(Math.random() * this.chars.length)];
      }
      return this.string;
    } else {
      for (let i = 0; i <= 2; i++) {
        this.string += this.chars[Math.floor(Math.random() * this.chars.length)];
      }
      return this.string;
    }
  }
  // ===============================

  validUserData = {
    workEmail: "test123test@test.com",
    fullName: "Igor Kirich",
    password: "Test1234567890-",
    firstName: "Igor",
    lastName: "Kirich",
    phoneNumber: "677206363",
    companyWebsite: "https://www.ukr.net",
  };
  // validUserData = {
  //   workEmail: 'test123test@test.com',
  //   fullName: faker.name.fullName(),
  //   password: faker.internet.password(20, /[A-Z]/, /[0-9]/),
  //   firstName: faker.name.firstname(),
  //   lastName: faker.name.lastname(),
  //   phoneNumber: faker.phone.number('+38 91 ### ## ##'),
  //   companyWebsite: 'https://www.ukr.net',
  // };

  invalidUserData = {
    workEmail: this.generateRandomData(6) + "@test",
    fullName: "Igour Kirich" + this.generateRandomData(4),
    password: "Test" + this.generateRandomData(),
    firstName: "Igor" + this.generateRandomData(3),
    lastName: "Kirich" + this.generateRandomData(3),
    phoneNumber: this.generateRandomData(7),
    companyWebsite: "https:www.ukr.net",
  };

  validLoginUserData = {
    workEmail: "teosoph2@gmail.com",
    fullName: "Igor Kirichenko",
    password: "[0432igfj0(((j!!KKK",
    firstName: "Igor",
    lastName: "Kirichenko",
    phoneNumber: "+380677206363",
    companyWebsite: "https://www.ukr.net",
  };
  invalidLoginUserData = {
    workEmail: "teosoph2@gmail.co",
    fullName: "Igor Kirichenko",
    password: "[0432igfj0(((j!!KK",
    firstName: "Igo",
    lastName: "Kiric",
    phoneNumber: "+38067720636",
    companyWebsite: "https://www.uk.net",
  };
}

module.exports = new CommonPage();
