import { Page } from '@playwright/test';
import { commonHelper } from '../Helpers/commonHelper';

export class EmployeesHub {
  private readonly page: Page;
  private readonly employeesHubURL: string;
  private readonly addEmployeeButton: string;
  private readonly employeesHubPageTitle: string;
  private readonly addNewEmployeeTitle: string;
  private readonly firstNameField: string;
  private readonly lastNameField: string;
  private readonly emailAddressField: string;
  private readonly phoneNumberField: string;
   private readonly startDateField: string;
  private readonly jobTitleField: string;
  private readonly employeeFirstName1: string;
  private readonly employeeLastName1: string;
  private readonly employeeEmailAddress1: string;
  private readonly employeePhoneNumber1: string;
  private readonly startDate: string;
  private readonly jobTitle: string;
  private readonly saveNewEmployeeButton: string;
  private readonly commonHelper: commonHelper;

  constructor(page: Page) {
    this.page = page;
    this.commonHelper = new commonHelper(page);
    this.employeesHubURL = "https://sandbox-app.brighthr.com/employee-hub";
    this.addEmployeeButton = "Add employee";
    this.employeesHubPageTitle = "Employees";
    this.addNewEmployeeTitle = "Add new employee";
    this.firstNameField = "First name"
    this.lastNameField = "Last name"
    this.emailAddressField = "Email address"
    this.phoneNumberField = "Phone number (optional)"
    this.startDateField = "'Start date (optional)"
    this.jobTitleField = "Job Title"
    this.employeeFirstName1 = "testFirstName1";
    this.employeeLastName1 = "lastName1";
    this.employeeEmailAddress1 = "test@test1.com";
    this.employeePhoneNumber1 = "07123456789";
    this.startDate = "12/02/2000"
    this.jobTitle = "Test Engineer";
    this.saveNewEmployeeButton = "Save new employee"
  }

    async assertEmployeesHubURLDisplayed() {
      await this.commonHelper.assertURLDisplayed(new URL(this.employeesHubURL));
    }

    async assertEmployeesPageTitleDisplayed() {
      await this.commonHelper.assertPageTitleIsDisplayed(this.employeesHubPageTitle);
    }

    async assertAddNewEmployeeTitleIsDisplayed () {
      await this.commonHelper.assertPageTitleIsDisplayed(this.addNewEmployeeTitle);
    }

    async assertAddNewEmployeeModalDisplayed() {
      await this.assertAddNewEmployeeTitleIsDisplayed()
    }

    async assertEmployeesHubPageDisplayed() {
      await this.assertEmployeesHubURLDisplayed();
      await this.assertEmployeesPageTitleDisplayed();
    }

    async assertAddEmployeeButtonDisplayed() {
      await this.commonHelper.assertButtonDisplayed(this.addEmployeeButton);
    }

    async assertFirstNameFieldDisplayedAndFill() {
      await this.commonHelper.assertTextBoxDisplayed(this.firstNameField)
      await this.commonHelper.fillTextbox(this.firstNameField, this.employeeFirstName1)
    }
    
    async assertLastNameFieldDisplayedAndFill() {
      await this.commonHelper.assertTextBoxDisplayed(this.lastNameField)
      await this.commonHelper.fillTextbox(this.lastNameField, this.employeeLastName1)
    }

    async assertEmailAddressFieldDisplayedAndFill() {
      await this.commonHelper.assertTextBoxDisplayed(this.emailAddressField)
      await this.commonHelper.fillTextbox(this.emailAddressField, this.employeeEmailAddress1)
    }

    async assertPhoneNumberFieldDisplayedAndFill() {
      await this.commonHelper.assertTextBoxDisplayed(this.phoneNumberField)
      await this.commonHelper.fillTextbox(this.phoneNumberField, this.employeePhoneNumber1)
    }

    async assertJobTitleFieldDisplayedAndFill() {
      await this.commonHelper.assertTextBoxDisplayed(this.jobTitleField)
      await this.commonHelper.fillTextbox(this.jobTitleField, this.jobTitle)
    }

    async assertStartDateDisplayedAndAddStartDate(){
      await this.commonHelper.assertTextBoxDisplayed(this.startDate)
      await this.commonHelper.fillTextbox(this.startDateField, this.startDate)
    }

    async addNewEmployee1Details() {
      await this.assertFirstNameFieldDisplayedAndFill();
      await this.assertLastNameFieldDisplayedAndFill();
      await this.assertEmailAddressFieldDisplayedAndFill();
      await this.assertPhoneNumberFieldDisplayedAndFill();
      await this.assertJobTitleFieldDisplayedAndFill();
      await this.clickSaveNewEmployeeButton();
    }

    async clickAddEmployeeButton() {
      await this.assertAddEmployeeButtonDisplayed();
      await this.commonHelper.clickButtonByRole(this.addEmployeeButton);
    }

    async clickSaveNewEmployeeButton() {
      await this.commonHelper.clickButtonByRole(this.saveNewEmployeeButton)
    }
}