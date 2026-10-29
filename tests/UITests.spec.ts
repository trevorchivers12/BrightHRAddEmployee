import { test, expect } from './Fixtures/Login';

  // test.afterEach(async () => {
  //   await .removeAll();
  // });

  test('Able to Add Two Employees Successfully', async ({ logIn, homePage, employeesHub }) => {
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
    await employeesHub.assertEmployeesHubPageDisplayed();
    await employeesHub.assertEmployeeAddedToHub('testFirstName1', 'testLastName1');
    await employeesHub.assertEmployeeAddedToHub('testFirstName2', 'testLastName2');
  });