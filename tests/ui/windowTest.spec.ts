import { expect, test } from '@playwright/test';
import { WindowPage } from '../../page-objects/WindowPage';

test.describe('Tests for Windows', () => {

    let windowPage: WindowPage;
    test('Open new Tab', async ({ context, page }) => {
        windowPage = new WindowPage(page);
        await windowPage.open('windows');

        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            windowPage.tapClickHere()
        ]);

        await newPage.waitForLoadState();
        await expect(newPage.getByRole('heading', { name: 'New Window' })).toContainText('New Window');
    })
})