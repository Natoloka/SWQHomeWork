import { Page } from "@playwright/test"
import { LoginPage } from "./LoginPage"

export class PageManager{
    private readonly page: Page
    private readonly loginPage: LoginPage

    constructor(page: Page) {
        this.loginPage = new LoginPage(this.page)
    }

    login() {
        return this.loginPage
    }
}