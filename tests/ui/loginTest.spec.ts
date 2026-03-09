import { test } from '@playwright/test';
import { LoginPage } from '../../page-objects/LoginPage';
import { SecurePage } from '../../page-objects/SecurePage';
import { users } from '../../test-data/loginData';

test.describe('Login cases for Users', () => {
    let loginPage: LoginPage;
    let securePage: SecurePage;

    test.beforeEach('Going to Login page', async ({ page }) => {
        loginPage = new LoginPage(page);
        securePage = new SecurePage(page);
        // await loginPage.open('/login');
        await loginPage.open('login');
    })

    for (const { username, password, expectedMessage, shouldLogin } of users) {
        test(`Login for username:${username} password:${password}`, async () => {


            await test.step('Login attempt', async () => {
                await loginPage.login(username, password);
            })

            await test.step('Verify results', async () => {
                if (shouldLogin) {
                    await securePage.assertSuccessfulLogin(expectedMessage);
                }
                else {
                    await loginPage.unsuccessfulLogin(expectedMessage);
                }

            })
        })

    }

})