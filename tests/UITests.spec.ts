import { test } from './Fixtures/Login';
import { HomePage } from './Page Objects/HomePage';
import { LoginPage } from './Page Objects/LoginPage';

const BASE_URL = "https://sandbox-app.brighthr.com/lite";

test.describe("homepage", () => {
  let home: HomePage;
  let loginPage: LoginPage;
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
    home = new HomePage(page);
    loginPage = new LoginPage(page);
  });

test('Test Login', async ({ page }) => {
  await home.goToLoginPage();
  await loginPage.fillInCredentials();
  await loginPage.clickLoginButton();
  });
});