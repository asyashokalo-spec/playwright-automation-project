import { test, expect } from '@playwright/test';
import { DynamicControlsPage } from '../../page-objects/DynamicControls';

test.describe.only('Tests for dynamic controls', () => {

    let dynamicControlsPage: DynamicControlsPage;

    test.beforeEach(async ({ page }) => {
        dynamicControlsPage = new DynamicControlsPage(page);
        await dynamicControlsPage.open('dynamic_controls');
    })

    test('Remove checkbox', async ({ page }) => {
        await dynamicControlsPage.removeCheckbox();
    })

    test('Input field test', async ({ page }) => {
        await dynamicControlsPage.enableInput();
        await dynamicControlsPage.fillInput('Playwright');

    })
})