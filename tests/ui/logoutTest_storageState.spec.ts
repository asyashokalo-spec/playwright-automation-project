import { test, expect, Page, BrowserContext } from '@playwright/test';
import { LoginPage } from '../../page-objects/LoginPage';
import { SecurePage } from '../../page-objects/SecurePage';
import { validUser } from '../../test-data/loginData';

test.describe('Tests for Logging out', () => {
    let loginPage: LoginPage;
    let securePage: SecurePage;
    let page: Page;
    let context: BrowserContext;



    test.beforeEach('Preparation for Logout scenario', async ({ browser, browserName }) => {

        context = await browser.newContext({ storageState: `.auth/storageState.${browserName}.json` });
        page = await context.newPage();
        loginPage = new LoginPage(page);
        securePage = new SecurePage(page);
        await loginPage.open('secure');
        // console.log(await page.context().cookies()); checked cookies which were used
    })

    test('Logout', async () => {
        let loginPageAfterLogout = await securePage.logout();
        await expect(page).toHaveURL('/login');

    })


})