import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { LoginPage } from './LoginPage';

export class SecurePage extends BasePage {

    readonly successMessage: Locator
    readonly logOutButton: Locator

    constructor(page: Page) {
        super(page);
        this.successMessage = page.locator('#flash');
        this.logOutButton = page.getByRole('link', { name: 'Logout' });
    }

    async assertSuccessfulLogin(successMessage: string) {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/secure');
        await expect(this.successMessage).toContainText(successMessage);
    }



    async logout() {
        await this.logOutButton.click();
        return new LoginPage(this.page);

    }
}





