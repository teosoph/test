const {config} = require("./wdio.conf");
require("path");
const firefoxConfig = {
    ...config,
    services: [['selenium-standalone', {firefox: 'latest'}]],
    capabilities: [{
        maxInstances: 1,
        browserName: "firefox",
        'moz:firefoxOptions': {
            args: ['--headless','--start-maximized', '--no-sandbox', '--disable-gpu', '--window-size=1920,1080', '--allow-insecure-localhost']
        },
    }],

    path: "/wd/hub",

};

exports.config = firefoxConfig;
