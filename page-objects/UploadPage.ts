import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class UploadPage extends BasePage {

    readonly inputField: Locator;
    readonly uploadButton: Locator;
    readonly confirmation: Locator;

    constructor(page: Page) {
        super(page);
        this.inputField = page.locator('#file-upload');
        this.uploadButton = page.locator('#file-submit');
        this.confirmation = page.getByRole('heading', { name: 'File Uploaded!' });
    }

    async clearUpload() {
        await this.inputField.setInputFiles([]);
    }

    async uploadFile(filename: string) {
        await this.inputField.setInputFiles(`test-data/${filename}`);
    }

    async sendFile() {
        await this.uploadButton.click();
    }


    async fileUploadedCheck(filename: string) {
        await expect(this.confirmation).toContainText('File Uploaded!');
        await expect(this.page.locator('#uploaded-files')).toContainText(filename);
    }


}