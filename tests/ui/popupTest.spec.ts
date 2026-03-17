import { expect, test } from '@playwright/test';
import { PopupPage } from '../../page-objects/PopupPage';

test.describe('Tests for Popup page', () => {
    let popupPage: PopupPage;

    test('Test for Popup', async ({ page }) => {
        popupPage = new PopupPage(page);
        await popupPage.open('javascript_alerts');
        page.once('dialog', async dialog => {
            expect(dialog.message()).toContain('I am a JS Confirm');
            await dialog.dismiss();
        });
        await popupPage.tapjsConfirm();
        await popupPage.expectResult('You clicked: Cancel');
    })
})