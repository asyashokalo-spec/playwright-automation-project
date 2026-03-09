import { PlaywrightTestConfig } from '@playwright/test'
const config: PlaywrightTestConfig = {
    timeout: 60000, //timeout for each test - max time for executing 1 test
    retries: 0, //how many times to retry failed tests

    use: {
        baseURL: 'https://the-internet.herokuapp.com',
        headless: true, //run tests without opening browser window
        viewport: { width: 1280, height: 720 }, // dimension of browser window
        actionTimeout: 15000, //timeout for each action such as click, fill, etc
        ignoreHTTPSErrors: true,
        video: 'retain-on-failure', //automatically record a video of test execution
        screenshot: 'only-on-failure'
    },

    reporter: 'html',

    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium' }
        },

        {
            name: 'Firefox',
            use: { browserName: 'firefox' }
        },

        {
            name: 'Webkit',
            use: { browserName: 'webkit' }
        }
    ]
}

export default config