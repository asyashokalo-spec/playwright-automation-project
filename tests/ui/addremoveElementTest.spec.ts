import { test, expect } from '@playwright/test';
import { AddRemoveElementsPage } from '../../page-objects/AddRemoveElementsPage';

test.describe('Tests for add-remove elements page', () => {
    let addRemoveElement: AddRemoveElementsPage;
    let count = 0;

    test.beforeEach(async ({ page }) => {
        addRemoveElement = new AddRemoveElementsPage(page);
        await addRemoveElement.open('add_remove_elements/');
    })


    test('should add and remove element', async ({ page }) => {
        await addRemoveElement.tapAddElement();
        await addRemoveElement.countDelete(1);
        await addRemoveElement.tapDelete();
    })

    test('Add 3 elements', async ({ page }) => {
        for (let i = 1; i < 4; i++) {
            await addRemoveElement.tapAddElement();
            count++;
        }
        await addRemoveElement.countDelete(count);
    })
})