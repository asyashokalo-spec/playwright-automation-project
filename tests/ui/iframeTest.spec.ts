import { test, expect } from '@playwright/test';
import { IframePage } from '../../page-objects/IFramePage';

test.describe('Tests for iFrame', () => {

    let iFramePage: IframePage;

    test('Clear and enter text into iFrame', async ({ page }) => {
        iFramePage = new IframePage(page);
        await iFramePage.open('iframe');
        // await iFramePage.clearText(); because unfortunately this page now has read-only mode
        // await iFramePage.enterText("Playwright");because unfortunately this page now has read-only mode

    })
})