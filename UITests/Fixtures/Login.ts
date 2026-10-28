import { test as base, Page } from '@playwright/test';
import { HomePage } from '../Page Objects/HomePage';
import { LoginPage } from '../Page Objects/LoginPage';
import { EmployeesHub } from '../Page Objects/EmployeesHubPage';

const BASE_URL = "https://sandbox-app.brighthr.com/lite";

type LoginFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  logIn: Page;
  employeesHub: EmployeesHub;
};

export const test = base.extend<LoginFixtures>({
  homePage: async ({ page }, use) => {
    await page.goto(BASE_URL);
    await use(new HomePage(page));
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  employeesHub: async ({ page }, use) => {
    await use(new EmployeesHub(page));
  },

  logIn: async ({ page, homePage, loginPage }, use) => {
    await loginPage.goToLoginPage();
    await loginPage.fillInCredentials();
    await loginPage.clickLoginButton();
    await homePage.assertHomepageURLDisplayed();
    await use(page);
  },
});

export { expect } from '@playwright/test';