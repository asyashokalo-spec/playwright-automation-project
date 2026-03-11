import { test } from '@playwright/test';
import { CheckboxPage } from '../../page-objects/CheckboxPage';

test.describe('Pack of tests for checkBox page', () => {

    let checkboxPage: CheckboxPage;

    test.beforeEach(async ({ page }) => {
        checkboxPage = new CheckboxPage(page);
        await checkboxPage.open('checkboxes');
    })

    test('CheckBox test', async ({ page }) => {

        let status1 = await checkboxPage.checkOfCheckboxState(checkboxPage.checkBox1);
        if (status1) {
            await checkboxPage.checkboxUnCheck(checkboxPage.checkBox1);
            await checkboxPage.expectUnchecked(checkboxPage.checkBox1);
        } else {
            await checkboxPage.checkboxCheck(checkboxPage.checkBox1);
            await checkboxPage.expectChecked(checkboxPage.checkBox1);
        }

        let status2 = await checkboxPage.checkOfCheckboxState(checkboxPage.checkBox2);
        if (status2) {
            await checkboxPage.checkboxUnCheck(checkboxPage.checkBox2);
            await checkboxPage.expectUnchecked(checkboxPage.checkBox2);
        } else {
            await checkboxPage.checkboxCheck(checkboxPage.checkBox2);
            await checkboxPage.expectChecked(checkboxPage.checkBox2);

        }






    })
})