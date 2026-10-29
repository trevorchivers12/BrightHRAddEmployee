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
  
    async removeEmployeeRecords() {
        await this.employeesHub.clickEditButton();
        await this.employeesHub.clickDeleteEmployeeLink();
        await this.employeesHub.viewOrEditPageDisplayed();
        await this.employeesHub.clickCheckBox();
        await this.employeesHub.clickDeleteEmployeeButton(this.employeesHub.employeeFirstName1);
        await this.employeesHub.clickReturnToEmployeeHubButton();
        await this.homePage.clickEmployeeSideBarOption();
        await this.employeesHub.assertEmployeeRemovedFromHub(this.employeesHub.employeeFirstName1, this.employeesHub.employeeLastName1)
        await this.employeesHub.clickEditButton();
        await this.employeesHub.clickDeleteEmployeeLink();
        await this.employeesHub.viewOrEditPageDisplayed();
        await this.employeesHub.clickCheckBox();
        await this.employeesHub.clickDeleteEmployeeButton(this.employeesHub.employeeFirstName2);
        await this.employeesHub.clickReturnToEmployeeHubButton();
        await this.homePage.clickEmployeeSideBarOption();
        await this.employeesHub.assertEmployeeRemovedFromHub(this.employeesHub.employeeFirstName2, this.employeesHub.employeeLastName2)
    }
};