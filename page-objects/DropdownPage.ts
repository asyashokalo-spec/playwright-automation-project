import { expect, Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage'


export class DropdownPage extends BasePage {

    readonly dropdownElement: Locator

    constructor(page: Page) {
        super(page);
        this.dropdownElement = page.locator('#dropdown');
    }

    async expectdefaultOptionSelected() {
        await expect(this.dropdownElement).toHaveValue('');
    }

    async selectOption(value: string) {
        await this.dropdownElement.selectOption(value);

    }

    async expectSelected(value: string) {
        await expect(this.dropdownElement).toHaveValue(value);
    }


} 