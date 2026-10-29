import { Page, expect } from '@playwright/test';
import { HomePage } from '../Page Objects/HomePage';
import { EmployeesHub } from '../Page Objects/EmployeesHubPage';


export class tearDownHelper {
    private readonly page: Page;
    private readonly homePage: HomePage;
    private readonly employeesHub : EmployeesHub;

    constructor(page: Page) {
        this.page = page;
        this.homePage = new HomePage(page);
        this.employeesHub = new EmployeesHub(page);
    }
  
    async removeAllEmployeeRecords() {
    
    await this.page.getByTestId('EditButton').nth(1).click();
    await this.page.getByRole('link', { name: 'Delete employee record' }).click();
    await this.page.getByTestId('checkboxLabel').click();
    await this.page.getByTestId('deleteCheckBox').check();
    await this.page.getByRole('button', { name: 'Delete testFirstName1' }).click();
    await this.page.getByRole('button', { name: 'Return to employee hub' }).click();
    await this.homePage.clickEmployeeSideBarOption();
    await this.employeesHub.assertEmployeeRemovedFromHub(this.employeesHub.employeeFirstName1, this.employeesHub.employeeLastName1)
    await this.page.getByTestId('EditButton').nth(1).click();
    await this.page.getByRole('link', { name: 'Delete employee record' }).click();
    await this.page.getByTestId('checkboxLabel').click();
    await this.page.getByTestId('deleteCheckBox').check();
    await this.page.getByRole('button', { name: 'Delete testFirstName2' }).click();
    await this.page.getByRole('button', { name: 'Return to employee hub' }).click();
    await this.homePage.clickEmployeeSideBarOption();
    await this.employeesHub.assertEmployeeRemovedFromHub(this.employeesHub.employeeFirstName2, this.employeesHub.employeeLastName2)
   }
};