import { test } from '@playwright/test';
import { LoginPage } from '../../page-objects/LoginPage';
import { SecurePage } from '../../page-objects/SecurePage';
import { validUser } from '../../test-data/loginData';


test('Save storageState', async ({ page, browserName }) => {
    let loginPage = new LoginPage(page);
    let securePage = new SecurePage(page);
    await loginPage.open('login');
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await page.waitForURL('**/secure'); //to make sure that user redirected to correct page
    //await securePage.assertSuccessfulLogin(validUser.expectedMessage); when I used this - incorrect session was recorded (cause of appearence of flas which contained message) - a Chromium didn't want to use this session data to perform login. REMEMBER!!!
    await page.context().storageState({ path: `.auth/storageState.${browserName}.json` });

})