import { Page } from '@playwright/test';
import { commonUtils } from '../Helpers/commonUtils';

export class HomePage {
  private readonly page: Page;
  private readonly loginLink: string;
  private readonly homePageURL: string;
  private readonly commonUtils: commonUtils;
  private readonly sideBarOption: string;

  constructor(page: Page) {
    this.page = page;
    this.commonUtils = new commonUtils(page);
    this.loginLink =  "Log in"
    this.homePageURL = "https://sandbox-app.brighthr.com/dashboard";
    this.sideBarOption = "Employees";
  }

  async assertHomepageURLDisplayed() {
    await this.commonUtils.assertURLDisplayed(new URL(this.homePageURL));
  }

  async assertEmployeeSideBarOptionDisplayed() {
    await this.commonUtils.assertOptionDisplayedInSideBar(this.sideBarOption);
  }

  async clickEmployeeSideBarOption() {
    await this.commonUtils.clickOptionInSideBar(this.sideBarOption);

  }
}
