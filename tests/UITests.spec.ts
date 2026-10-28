import { test, expect } from './Fixtures/Login';

  test('Test Adding a new employees', async ({ logIn, homePage, employeesHub }) => {
    await homePage.assertEmployeeSideBarOptionDisplayed();
    await homePage.clickEmployeeSideBarOption();
    await employeesHub.assertEmployeesHubPageDisplayed();
    await employeesHub.clickAddEmployeeButton();
    await employeesHub.assertAddNewEmployeeModalDisplayed();
    await employeesHub.addDetailForEmployee1();
    await employeesHub.assertSuccessfulMessageDisplayedForAddedEmployeeTest('testFirstName1');
    await employeesHub.clickAddAnotherEmployeeButton();
    await employeesHub.addDetailForEmployee2();
    await employeesHub.assertSuccessfulModalAndMessageDisplayedForNewEmployee('testFirstName2');
    await employeesHub.clickCloseModalButton();
  });