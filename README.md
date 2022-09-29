# wdio-allure-pipeline\_\_telnix.com

This is a tutorial project for learning Webdriver.io (wdio) and Allure reporting frameworks with pipeline to GitPages for Telnix.com

# Test Telnix

The purpose of this project is to test the Telnyx website: https://telnyx.com/

This project is for e2e testing the functionality of the Telnyx website.

## Requirement

- Download and install [VS Code] (https://code.visualstudio.com/) or any other IDE of your choice.

- Download and install [at least Node.js 14](https://nodejs.org/uk/download/)

### How to open and run a project

- Download or clone project from repository

- Open the project folder in VSCode or another IDE

The test script files are located at:

.\test\specs\*.spec.js

The page object files are in:

.\test\pageobjects\*.page.js

- All scripts to run tests you can find in package.json file

  There you can find different test options, such as full or headless tests for Chrome or Firefox separately.

### Usage

- In terminal type:

`npm install`

### Run

- Launch wdio tests with the following commands in the terminal:

`npm run test:{script-from-package.json-file}`

For example, for TC-003 and TC-004 run: `npm run test:chrome:TC-003/TC-004`

- After a while, the wdio test will begin.

- In the window that opens you will test process

### Run Allure Reporting

- The project uses Allure Reporting framework to get repors about results of testing

To be able to see the report, you need to run the following scripts in the terminal:

`npm run allure:generate`, then `npm run report`
