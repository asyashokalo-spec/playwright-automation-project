import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/LoginPage';
import { SecurePage } from '../../page-objects/SecurePage';
import { validUser } from '../../test-data/loginData';

test.describe('Tests for Logging out', () => {
    let loginPage: LoginPage;
    let securePage: SecurePage;

    test.beforeEach('Preparation for Logout scenario', async ({ page }) => {
        loginPage = new LoginPage(page);
        securePage = new SecurePage(page);

        await loginPage.open('/login');
        await loginPage.login(validUser.username, validUser.password);
        await securePage.assertSuccessfulLogin(validUser.expectedMessage)


    })

    test('Logout', async ({ page }) => {
        let loginPageAfterLogout = await securePage.logout();
        await expect(page).toHaveURL('/login');

    })


})