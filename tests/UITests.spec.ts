import { test, expect } from './Fixtures/Login';

  test('Test Adding a new employee', async ({ logIn, homePage, employeesHub }) => {
    await homePage.assertEmployeeSideBarOptionDisplayed();
    await homePage.clickEmployeeSideBarOption();
    await employeesHub.assertEmployeesHubPageDisplayed();
    await employeesHub.clickAddEmployeeButton();
    await employeesHub.assertAddNewEmployeeModalDisplayed();
    await employeesHub.addNewEmployee1Details();
    // await employeesHub.fillInNewEmployeeDetails();
    // await employeesHub.clickAddNewEmployeeButton();
  });


  // await page.getByRole('textbox', { name: 'First name' }).click();
  // await page.getByRole('textbox', { name: 'First name' }).fill('trevor.chivers12@gmail.com');
  // await page.getByRole('textbox', { name: 'Last name' }).click();
  // await page.getByText('First nameLast nameEmail').click();
  // await page.getByRole('textbox', { name: 'First name' }).click();
  // await page.getByRole('textbox', { name: 'First name' }).click({

  // https://sandbox-app.brighthr.com/employee-hub
