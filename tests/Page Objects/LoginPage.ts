import { Page, expect } from '@playwright/test';
import { commonUtils } from '../Helpers/commonUtils';

declare const process: { env: Record<string, string | undefined> };

export class LoginPage {
  
  private readonly page: Page;
  private readonly loginLink: string;
  private readonly emailAddressField: string;
  private readonly passwordField: string;
  private readonly username: string;
  private readonly password: string;
  private readonly loginButton: string;
  private readonly commonUtils: commonUtils;

  constructor(page: Page) {
    this.page = page;
    this.commonUtils = new commonUtils(page);
    this.loginLink =  "Log in"
    this.emailAddressField = "Email address"
    this.passwordField = "Password visibility"
    this.username = process.env.BRIGHTHR_USERNAME ?? ""
    this.password = process.env.BRIGHTHR_PASSWORD ?? ""
    this.loginButton = "login-button"
  }

  async goToLoginPage() {
    await this.commonUtils.clickLink(this.loginLink);
  }

  async fillInCredentials() {
    await this.commonUtils.assertTextBoxDisplayed(this.emailAddressField);
    await this.commonUtils.assertTextBoxDisplayed(this.passwordField);
    await this.commonUtils.fillTextbox(this.emailAddressField, this.username);
    await this.commonUtils.fillTextbox(this.passwordField, this.password);
  }
  
  async clickLoginButton() {
    await this.commonUtils.clickButtonByTestId(this.loginButton);
  }
}