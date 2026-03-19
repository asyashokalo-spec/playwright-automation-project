import { expect, test } from '@playwright/test';
import { PopupPage } from '../../page-objects/PopupPage';

test.describe('Tests for Popup page', () => {
    let popupPage: PopupPage;

    test.beforeEach(async ({ page }) => {
        popupPage = new PopupPage(page);
        await popupPage.open('javascript_alerts');

    })

    test('Test for JS Confirm popup', async ({ page }) => {

        page.once('dialog', async dialog => {
            expect(dialog.message()).toContain('I am a JS Confirm');
            await dialog.dismiss();
        });
        await popupPage.tapjsConfirm();
        await popupPage.expectResult('You clicked: Cancel');
    })

    test('Test for JS Alert popup', async ({ page }) => {
        page.once('dialog', async dialog => {
            expect(dialog.message()).toContain('I am a JS Alert');
            await dialog.dismiss();
        })
        await popupPage.tapjsAlert();
        await expect(popupPage.result).toContainText('You successfully clicked an alert');
    })

    test('Test for JS Prompt', async ({ page }) => {

        page.once('dialog', async dialog => {
            expect(dialog.message()).toContain('I am a JS prompt');
            await dialog.accept('Playwright');
        })
        await popupPage.tapjsPrompt();
        await expect(popupPage.result).toContainText('You entered: Playwright');
    })
})