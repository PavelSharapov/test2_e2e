//jshint strict:
exports.config = {

    framework: 'jasmine2',
    directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        // '*.js',
        //  './gamesPageUnloginedUser-spec.js'
        './e2e-tests/mainPageElementsPresent-spec.js'

    ],
    capabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
            'excludeSwitches': ['enable-automation'], // disable-infobars "chrome is being controlled by automated software"
            'args': [
                // 'disable-dev-shm-usage', // fix 199 error of webdriver
                'no-sandbox'  // fix 199 error of webdriver
                // '--whitelisted-ips'// fix 199 error of webdriver
                // // 'autoDismissAlerts = true',
                // "--disable-notifications "


            ],

        },
        /*
            * Set browser language (menus & so on)
            *!/
           args: ['lang=en-EN'],
           prefs: {
               intl: {
                   accept_languages: "en-EN"
               }
           }
       }*/
    },
    // baseUrl: 'http://localhost:3002/',
    baseUrl: 'https://casinomacao.bet/',
    // baseUrl: 'https://c7go.com/',
    allScriptsTimeout: 8000,
    getPageTimeout: 10000,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
};