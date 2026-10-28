import { Page, expect } from '@playwright/test';
import { commonHelper } from '../Helpers/commonHelper';

export class LoginPage {
  
  private readonly page: Page;
  private readonly loginLink: string;
  private readonly emailAddressField: string;
  private readonly passwordField: string;
  private readonly username: string;
  private readonly password: string;
  private readonly loginButton: string;
  private readonly commonHelper: commonHelper;

  constructor(page: Page) {
    this.page = page;
    this.commonHelper = new commonHelper(page);
    this.loginLink =  "Log in"
    this.emailAddressField = "Email address"
    this.passwordField = "Password visibility"
    this.username = "trevor.chivers12@gmail.com"
    this.password = "Testingtask123"
    this.loginButton = "login-button"
  }

  async goToLoginPage() {
    await this.commonHelper.clickLink(this.loginLink);
  }

  async fillInCredentials() {
    await this.commonHelper.assertTextBoxDisplayed(this.emailAddressField);
    await this.commonHelper.assertTextBoxDisplayed(this.passwordField);
    await this.commonHelper.fillTextbox(this.emailAddressField, this.username);
    await this.commonHelper.fillTextbox(this.passwordField, this.password);
  }
  
  async clickLoginButton() {
    await this.commonHelper.clickButtonByTestId(this.loginButton);
  }
}