import { expect, Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckboxPage extends BasePage {

    readonly checkBox1: Locator;
    readonly checkBox2: Locator;


    constructor(page: Page) {
        super(page);
        this.checkBox1 = page.locator('#checkboxes input').first();
        this.checkBox2 = page.locator('#checkboxes.input').nth(1);
    }

    async checkboxClick(checkBox: Locator) {
        await checkBox.click();
    }


    async expectChecked(checkBox: Locator) {
        await expect(checkBox).toBeChecked();
    }

    async expectUnchecked(checkBox: Locator) {

        await expect(checkBox).not.toBeChecked();
    }




}

