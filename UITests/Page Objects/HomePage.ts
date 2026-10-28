import { Page } from '@playwright/test';
import { commonHelper } from '../Helpers/commonHelper';

export class HomePage {
  private readonly page: Page;
  private readonly loginLink: string;
  private readonly homePageURL: string;
  private readonly commonHelper: commonHelper;
private readonly sideBarOption: string;

  constructor(page: Page) {
    this.page = page;
    this.commonHelper = new commonHelper(page);
    this.loginLink =  "Log in"
    this.homePageURL = "https://sandbox-app.brighthr.com/dashboard";
    this.sideBarOption = "Employees";
  }

  async assertHomepageURLDisplayed() {
    await this.commonHelper.assertURLDisplayed(new URL(this.homePageURL));
  }

  async assertEmployeeSideBarOptionDisplayed() {
    await this.commonHelper.assertOptionDisplayedInSideBar(this.sideBarOption);
}

  async clickEmployeeSideBarOption() {
    await this.commonHelper.clickOptionInSideBar(this.sideBarOption);

  }
}
