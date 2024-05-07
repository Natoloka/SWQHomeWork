import { Page, expect } from "@playwright/test";
import { HelperBase } from "../HelperBase";

export class LoginPage extends HelperBase {
  constructor(page: Page) {
    super(page)
  }

 

  /**
   * @param userName 
   * @param password 
   * @param submit 
   */
  async login(userName: string, password: string, submit: boolean) {
    // const form = this.page.getByRole('form', { id:"login-form-id" })
    expect(this.page.getByLabel('login')).toBeVisible({ timeout: 10000 })
    await this.page.getByLabel('login').fill(userName)
    await this.page.getByLabel('password').fill(password)
    
    if (submit) {
      await this.page.locator('//*[@id="accounts-login-button"]').click()
    }
  }
}