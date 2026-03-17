import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage'


export class DynamicControlsPage extends BasePage {

    readonly removeCheckboxButton: Locator;
    readonly checkbox: Locator;
    readonly loadingElement1: Locator;
    readonly message: Locator;
    readonly enableInputButton: Locator;
    readonly inputField: Locator;

    constructor(page: Page) {
        super(page);
        this.removeCheckboxButton = page.getByRole('button', { name: 'Remove' });
        this.checkbox = page.locator('#checkbox input');
        this.loadingElement1 = page.locator('#loading');
        this.message = page.locator('#message');
        this.enableInputButton = page.getByRole('button', { name: 'Enable' });
        this.inputField = page.getByRole('textbox');
    }


    async removeCheckbox() {
        await this.removeCheckboxButton.click();
        await expect(this.loadingElement1).toBeVisible();
        await expect(this.loadingElement1).toBeHidden();
        await expect(this.checkbox).toHaveCount(0);
        await expect(this.message).toContainText("It's gone!");
    }

    async enableInput() {
        await this.enableInputButton.click();
        await expect(this.loadingElement1).toBeVisible();
        await expect(this.loadingElement1).toBeHidden();
        await expect(this.inputField).toBeEnabled();

    }

    async fillInput(text: string) {
        await this.inputField.fill(text);
        await expect(this.inputField).toHaveValue(text);
    }

}