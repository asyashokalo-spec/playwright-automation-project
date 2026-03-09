import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/LoginPage';

test.describe('Snapshot tests', () => {
    let loginPage: LoginPage;

    test('Snapshot test for login', async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.open('login');
        await loginPage.checkLoginSnapshot();
    })
})