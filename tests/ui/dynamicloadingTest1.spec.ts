import { test, expect } from '@playwright/test';
import { DynamicLoadingPage1 } from '../../page-objects/DynamicLoadingPage1';


test.describe('Dynamic Loading Page tests', () => {

    let dynamicloadingPage: DynamicLoadingPage1;

    test('Example 1', async ({ page }) => {
        dynamicloadingPage = new DynamicLoadingPage1(page);
        await dynamicloadingPage.open('dynamic_loading/1');
        await dynamicloadingPage.tapStart();
    })
})