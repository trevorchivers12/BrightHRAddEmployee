import { test, expect } from './Fixtures/Login';

  test('Adding Two Employees Successfully', async ({ logIn, homePage, employeesHub, removeEmployeeRecords }) => {
    await homePage.assertEmployeeSideBarOptionDisplayed();
    await homePage.clickEmployeeSideBarOption();
    await employeesHub.assertEmployeesHubPageDisplayed();
    await employeesHub.clickAddEmployeeButton();
    await employeesHub.assertAddNewEmployeeModalDisplayed();
    await employeesHub.addDetailsForEmployee1();
    await employeesHub.assertSuccessfulMessageDisplayedForAddedEmployeeTest(employeesHub.employeeFirstName1);
    await employeesHub.clickAddAnotherEmployeeButton();
    await employeesHub.addDetailsForEmployee2();
    await employeesHub.assertSuccessfulModalAndMessageDisplayedForNewEmployee(employeesHub.employeeFirstName2);
    await employeesHub.clickCloseModalButton();
    await employeesHub.assertEmployeesHubPageDisplayed();
    await employeesHub.assertEmployeeAddedToHub(employeesHub.employeeFirstName1, employeesHub.employeeLastName1);
    await employeesHub.assertEmployeeAddedToHub(employeesHub.employeeFirstName2, employeesHub.employeeLastName2);
  });