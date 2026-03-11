import { test } from '@playwright/test';
import { CheckboxPage } from '../../page-objects/CheckboxPage';

test.describe.only('Pack of tests for checkBox page', () => {

    let checkboxPage: CheckboxPage;

    test.beforeEach(async ({ page }) => {
        checkboxPage = new CheckboxPage(page);
        await checkboxPage.open('checkboxes');
    })

    test('CheckBox test', async ({ page }) => {
        await checkboxPage.checkboxCheck(checkboxPage.checkBox1);
        await checkboxPage.expectChecked(checkboxPage.checkBox1);
        await checkboxPage.checkboxUnCheck(checkboxPage.checkBox2);
        await checkboxPage.expectUnchecked(checkboxPage.checkBox2);


    })
})