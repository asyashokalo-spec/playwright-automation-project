import { Page, Locator } from '@playwright/test';

export class BasePage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page;
    }

    async open(path: string) {
        await this.page.goto(`${path}`);
    }
}

