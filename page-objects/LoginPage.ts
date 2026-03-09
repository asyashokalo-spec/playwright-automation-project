import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    //selectors

    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly signInButton: Locator
    readonly loginForm: Locator
    readonly flashMessage: Locator

    ///constructor

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.signInButton = page.locator('button[type="submit"]');
        this.flashMessage = page.locator('#flash');
        this.loginForm = page.locator('#content');

    }

    async login(username: string, password: string) {

        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }

    async unsuccessfulLogin(message: string) {
        await expect(this.flashMessage).toContainText(message);
    }

    async loggedout() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/login');
        await expect(this.flashMessage).toContainText('You logged out of the secure area!');

    }

    async checksecurity() {

        await this.open('/secure');
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/login');

    }

    async checkLoginSnapshot() {
        await expect(this.loginForm).toHaveScreenshot('login-form.png');
    }



}


