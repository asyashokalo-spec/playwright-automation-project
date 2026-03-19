import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class PopupPage extends BasePage {

    readonly jsConfirmButton: Locator;
    readonly jsAlertButton: Locator;
    readonly jsPromptButton: Locator;
    readonly result: Locator;

    constructor(page: Page) {
        super(page);
        this.jsConfirmButton = page.getByRole('button', { name: 'Click for JS Confirm' });
        this.jsAlertButton = page.getByRole('button', { name: 'Click for JS Alert' });
        this.jsPromptButton = page.getByRole('button', { name: 'Click for JS Prompt' });
        this.result = page.locator('#result');
    }

    async tapjsConfirm() {
        await this.jsConfirmButton.click();
    }

    async tapjsAlert() {
        await this.jsAlertButton.click();
    }

    async tapjsPrompt() {
        await this.jsPromptButton.click();
    }

    async expectResult(text: string) {
        await expect(this.result).toContainText(text);
    }
}