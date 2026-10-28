import { Page } from '@playwright/test';
import { commonHelper } from '../Helpers/commonHelper';

export class EmployeesHub {
  private readonly page: Page;
  private readonly employeesHubURL: string;
  private readonly addEmployeeButton: string;
  private readonly addAnotherEmployeeButton: string;
  private readonly closeModalButton: string;
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
  private readonly employeeFirstName2: string;
  private readonly employeeLastName2: string;
  private readonly employeeEmailAddress2: string;
  private readonly employeePhoneNumber2: string;
  private readonly startDate: string;
  private readonly jobTitle: string;
  private readonly saveNewEmployeeButton: string;
  private readonly successTitle: string;
  private readonly successMessage: string;
  private readonly commonHelper: commonHelper;

  constructor(page: Page) {
    this.page = page;
    this.commonHelper = new commonHelper(page);
    this.employeesHubURL = "https://sandbox-app.brighthr.com/employee-hub";
    this.addEmployeeButton = "Add employee";
    this.addAnotherEmployeeButton = "Add another employee"
    this.closeModalButton = "Close modal"
    this.employeesHubPageTitle = "Employees";
    this.addNewEmployeeTitle = "Add new employee";
    this.firstNameField = "First name"
    this.lastNameField = "Last name"
    this.emailAddressField = "Email address"
    this.phoneNumberField = "Phone number (optional)"
    this.startDateField = "Start date (optional)"
    this.jobTitleField = "Job Title"
    this.employeeFirstName1 = "testFirstName1";
    this.employeeLastName1 = "lastName1";
    this.employeeEmailAddress1 = "test@test1.com";
    this.employeePhoneNumber1 = "07123456789";
    this.employeeFirstName2 = "testFirstName2";
    this.employeeLastName2 = "lastName2";
    this.employeeEmailAddress2 = "test@test2.com";
    this.employeePhoneNumber2 = "07987654321";
    this.startDate = "12/02/2000"
    this.jobTitle = "Test Engineer";
    this.successTitle = "Success! New employee added"
    this.successMessage = "added to BrightHR Lite"
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

    async assertCloseModalButtonDisplayed() {
      await this.commonHelper.assertButtonDisplayed(this.closeModalButton);
    }

    async assertAddAnotherEmployeeButtonDisplayed() {
      await this.commonHelper.assertButtonDisplayed(this.addAnotherEmployeeButton)
    }

    async assertFirstNameFieldDisplayedAndFillForEmployee1() {
      await this.commonHelper.assertTextBoxDisplayed(this.firstNameField)
      await this.commonHelper.fillTextbox(this.firstNameField, this.employeeFirstName1)
    }
    
    async assertLastNameFieldDisplayedAndFillForEmployee1() {
      await this.commonHelper.assertTextBoxDisplayed(this.lastNameField)
      await this.commonHelper.fillTextbox(this.lastNameField, this.employeeLastName1)
    }

    async assertEmailAddressFieldDisplayedAndFillForEmployee1() {
      await this.commonHelper.assertTextBoxDisplayed(this.emailAddressField)
      await this.commonHelper.fillTextbox(this.emailAddressField, this.employeeEmailAddress1)
    }

    async assertPhoneNumberFieldDisplayedAndFillForEmployee1() {
      await this.commonHelper.assertTextBoxDisplayed(this.phoneNumberField)
      await this.commonHelper.fillTextbox(this.phoneNumberField, this.employeePhoneNumber1)
    }

    async assertFirstNameFieldDisplayedAndFillForEmployee2() {
      await this.commonHelper.assertTextBoxDisplayed(this.firstNameField)
      await this.commonHelper.fillTextbox(this.firstNameField, this.employeeFirstName2)
    }
    
    async assertLastNameFieldDisplayedAndFillForEmployee2() {
      await this.commonHelper.assertTextBoxDisplayed(this.lastNameField)
      await this.commonHelper.fillTextbox(this.lastNameField, this.employeeLastName2)
    }

    async assertEmailAddressFieldDisplayedAndFillForEmployee2() {
      await this.commonHelper.assertTextBoxDisplayed(this.emailAddressField)
      await this.commonHelper.fillTextbox(this.emailAddressField, this.employeeEmailAddress2)
    }

    async assertPhoneNumberFieldDisplayedAndFillForEmployee2() {
      await this.commonHelper.assertTextBoxDisplayed(this.phoneNumberField)
      await this.commonHelper.fillTextbox(this.phoneNumberField, this.employeePhoneNumber2)
    }


    async assertJobTitleFieldDisplayedAndFill() {
      await this.commonHelper.assertTextBoxDisplayed(this.jobTitleField)
      await this.commonHelper.fillTextbox(this.jobTitleField, this.jobTitle)
    }

    async assertStartDateDisplayedAndAddStartDate(){
      await this.commonHelper.assertTextBoxDisplayed(this.startDateField)
      await this.commonHelper.fillTextbox(this.startDateField, this.startDate)
    }

    async assertSuccessEmployeeAddedTitleDisplayed() {
      await this.commonHelper.assertPageTitleIsDisplayed(this.successTitle)
    } 

    async assertSuccessfulMessageDisplayedForAddedEmployeeTest(name: string) {
      await this.commonHelper.assertTextDisplayed(`${name} ${this.successMessage}`)
    }

    async assertSuccessfulModalAndMessageDisplayedForNewEmployee(name: string) {
      await this.assertSuccessEmployeeAddedTitleDisplayed();
      await this.assertSuccessfulMessageDisplayedForAddedEmployeeTest(name);
    }

    async addDetailForEmployee1() {
      await this.assertFirstNameFieldDisplayedAndFillForEmployee1();
      await this.assertLastNameFieldDisplayedAndFillForEmployee1();
      await this.assertEmailAddressFieldDisplayedAndFillForEmployee1();
      await this.assertPhoneNumberFieldDisplayedAndFillForEmployee1();
      await this.assertStartDateDisplayedAndAddStartDate();
      await this.assertJobTitleFieldDisplayedAndFill();
      await this.clickSaveNewEmployeeButton();
    }

    async addDetailForEmployee2() {
      await this.assertFirstNameFieldDisplayedAndFillForEmployee2();
      await this.assertLastNameFieldDisplayedAndFillForEmployee2();
      await this.assertEmailAddressFieldDisplayedAndFillForEmployee2();
      await this.assertPhoneNumberFieldDisplayedAndFillForEmployee2();
      await this.assertStartDateDisplayedAndAddStartDate();
      await this.assertJobTitleFieldDisplayedAndFill();
      await this.clickSaveNewEmployeeButton();
    }

    async clickAddEmployeeButton() {
      await this.assertAddEmployeeButtonDisplayed();
      await this.commonHelper.clickButtonByRole(this.addEmployeeButton);
    }

    async clickAddAnotherEmployeeButton() {
      await this.assertAddAnotherEmployeeButtonDisplayed();
      await this.commonHelper.clickButtonByRole(this.addAnotherEmployeeButton)
    }

    async clickCloseModalButton() {
      await this.assertCloseModalButtonDisplayed();
      await this.commonHelper.clickButtonByRole(this.closeModalButton);
    }

    async clickSaveNewEmployeeButton() {
      await this.commonHelper.clickButtonByRole(this.saveNewEmployeeButton)
    }
}