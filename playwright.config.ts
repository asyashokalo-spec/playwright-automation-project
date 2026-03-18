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
            name: 'setup-chromium',
            use: { browserName: 'chromium' },
            testMatch: '**/auth.setup.spec.ts'
        },

        {
            name: 'setup-firefox',
            use: { browserName: 'firefox' },
            testMatch: '**/auth.setup.spec.ts'
        },

        {
            name: 'setup-webkit',
            use: { browserName: 'webkit' },
            testMatch: '**/auth.setup.spec.ts'
        },

        {
            name: 'Chromium',
            use: { browserName: 'chromium' },
            testIgnore: '**/auth.setup.spec.ts', //or it'll be run with all tests and dependency will be ruined
            dependencies: ['setup-chromium']
        },

        {
            name: 'Firefox',
            use: { browserName: 'firefox' },
            testIgnore: '**/auth.setup.spec.ts',
            dependencies: ['setup-firefox']
        },

        {
            name: 'Webkit',
            use: { browserName: 'webkit' },
            testIgnore: '**/auth.setup.spec.ts',
            dependencies: ['setup-webkit']
        }
    ]
}

export default config