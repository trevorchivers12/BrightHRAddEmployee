import { test, expect } from './Fixtures/Login';
import { tearDownHelper } from './Helpers/tearDownHelper';

  test.afterEach(async ({ page }) => {
    await new tearDownHelper(page).removeAllEmployeeRecords();
});

  test('Able to Add Two Employees Successfully', async ({ logIn, homePage, employeesHub }) => {
    await homePage.assertEmployeeSideBarOptionDisplayed();
    await homePage.clickEmployeeSideBarOption();
    await employeesHub.assertEmployeesHubPageDisplayed();
    await employeesHub.clickAddEmployeeButton();
    await employeesHub.assertAddNewEmployeeModalDisplayed();
    await employeesHub.addDetailForEmployee1();
    await employeesHub.assertSuccessfulMessageDisplayedForAddedEmployeeTest(employeesHub.employeeFirstName1);
    await employeesHub.clickAddAnotherEmployeeButton();
    await employeesHub.addDetailForEmployee2();
    await employeesHub.assertSuccessfulModalAndMessageDisplayedForNewEmployee(employeesHub.employeeFirstName2);
    await employeesHub.clickCloseModalButton();
    await employeesHub.assertEmployeesHubPageDisplayed();
    await employeesHub.assertEmployeeAddedToHub(employeesHub.employeeFirstName1, employeesHub.employeeLastName1);
    await employeesHub.assertEmployeeAddedToHub(employeesHub.employeeFirstName2, employeesHub.employeeLastName2);
  });