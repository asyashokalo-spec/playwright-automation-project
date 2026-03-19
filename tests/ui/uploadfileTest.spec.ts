import { test, expect } from '@playwright/test';
import { UploadPage } from '../../page-objects/UploadPage';

test.describe('Tests for Upload', () => {
    let uploadPage: UploadPage;

    test.beforeEach(async ({ page }) => {
        uploadPage = new UploadPage(page);
        await uploadPage.open('upload');
        await uploadPage.clearUpload();

    })

    test('Upload File test', async ({ page }) => {

        await uploadPage.uploadFile('fileforupload.txt');
        await uploadPage.sendFile();
        await uploadPage.fileUploadedCheck('fileforupload.txt');
    })

    test('Double upload of files', async ({ page }) => {
        await uploadPage.uploadFile('fileforupload.txt');
        await uploadPage.uploadFile('fileforupload2.txt');
        await uploadPage.sendFile();
        await uploadPage.fileUploadedCheck('fileforupload2.txt');
    })

    test('Negative test - no file', async ({ page }) => {
        await uploadPage.sendFile();
        await expect(page.getByRole('heading', { name: 'Internal Server Error' })).toContainText('Internal Server Error');
    })
})