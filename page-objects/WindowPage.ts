import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class WindowPage extends BasePage {

    readonly linkClickHere: Locator;


    constructor(page: Page) {
        super(page);
        this.linkClickHere = page.getByRole('link', { name: 'Click Here' });
    }

    async tapClickHere() {
        await this.linkClickHere.click();
    }
}