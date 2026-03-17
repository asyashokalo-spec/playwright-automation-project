import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class IframePage extends BasePage {

    readonly frame = this.page.frameLocator('#mce_0_ifr');
    readonly editor: Locator;

    constructor(page: Page) {
        super(page);
        this.editor = this.frame.locator('body');

    }

    async clearText() {
        await this.editor.click();
        await this.editor.fill('');
    }

    async enterText(text: string) {
        await this.editor.click();
        await this.editor.fill(text);
        await expect(this.editor).toContainText(text);
    }
}