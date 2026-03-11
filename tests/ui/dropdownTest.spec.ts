import { test, expect } from '@playwright/test';
import { DropdownPage } from '../../page-objects/DropdownPage';

test.describe('Tests for dropdown', () => {

    let dropdownPage: DropdownPage;
    test.beforeEach(async ({ page }) => {
        dropdownPage = new DropdownPage(page);
        await dropdownPage.open('dropdown');
    })

    test('Check if default value is selected', async ({ page }) => {
        await dropdownPage.expectdefaultOptionSelected();
    })


    test('Select options in dropdown', async ({ page }) => {
        await dropdownPage.selectOption('1');
        await dropdownPage.expectSelected('1');
        await dropdownPage.selectOption('2');
        await dropdownPage.expectSelected('2');


    })
})