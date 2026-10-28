import { Page } from '@playwright/test';
import { commonHelper } from '../Helpers/commonHelper';

export class HomePage {
  private readonly page: Page;
  private readonly loginLink: string;
  private readonly commonHelper: commonHelper;

  constructor(page: Page) {
    this.page = page;
    this.commonHelper = new commonHelper(page);
    this.loginLink =  "Log in"
  }

  async goToLoginPage() {
    // await this.page.goto('https://sandbox-app.brighthr.com/lite'); // need to move this to config file
    // await this.commonHelper.assertLinkDisplayed(this.loginLink);
    await this.commonHelper.clickLink(this.loginLink);
  }
}   
