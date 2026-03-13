import { expect, Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';


export class AddRemoveElementsPage extends BasePage {

    readonly addElementButton: Locator;
    readonly deleteButton: Locator;

    constructor(page: Page) {
        super(page);
        this.addElementButton = page.getByRole('button', { name: 'Add Element' });
        this.deleteButton = page.getByRole('button', { name: 'Delete' });
    }


    async tapAddElement() {
        await this.addElementButton.click();
    }

    async countDelete(number: number) {
        await expect(this.deleteButton).toHaveCount(number);
    }

    async tapDelete() {
        await this.deleteButton.nth(0).click();
        await expect(this.deleteButton).toHaveCount(0);
    }
}

