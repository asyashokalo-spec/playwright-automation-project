import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';


export class DynamicLoadingPage1 extends BasePage {

    readonly buttonStart: Locator;
    readonly loadingElement: Locator;
    readonly message: Locator;

    constructor(page: Page) {
        super(page);
        this.buttonStart = page.getByRole('button', { name: 'Start' });
        this.loadingElement = page.locator('#loading');
        this.message = page.getByRole('heading', { name: "Hello World!" });
    }

    async tapStart() {
        await this.buttonStart.click();
        await this.loadingElement.waitFor({ state: 'hidden' });
        await expect(this.message).toBeVisible();
        await expect(this.message).toContainText('Hello World!');
    }
}