import { Page } from '@playwright/test';
import { commonUtils } from '../Helpers/commonUtils';

export class EmployeesHub {
  private readonly page: Page;
  private readonly employeesHubURL: string;
  private readonly addEmployeeButton: string;
  private readonly addAnotherEmployeeButton: string;
  private readonly closeModalButton: string;
  private readonly employeesHubPageTitle: string;
  private readonly addNewEmployeeTitle: string;
  private readonly employeeCountHeader: string;
  private readonly firstNameField: string;
  private readonly lastNameField: string;
  private readonly emailAddressField: string;
  private readonly phoneNumberField: string;
  private readonly startDateField: string;
  private readonly jobTitleField: string;
  public readonly employeeFirstName1: string;
  public readonly employeeLastName1: string;
  private readonly employeeEmailAddress1: string;
  private readonly employeePhoneNumber1: string;
  public readonly employeeFirstName2: string;
  public readonly employeeLastName2: string;
  private readonly employeeEmailAddress2: string;
  private readonly employeePhoneNumber2: string;
  private readonly startDate: string;
  private readonly jobTitle: string;
  private readonly saveNewEmployeeButton: string;
  private readonly successTitle: string;
  private readonly successMessage: string;
  private readonly commonUtils: commonUtils;

  constructor(page: Page) {
    this.page = page;
    this.commonUtils = new commonUtils(page);
    this.employeesHubURL = "https://sandbox-app.brighthr.com/employee-hub";
    this.addEmployeeButton = "Add employee";
    this.addAnotherEmployeeButton = "Add another employee"
    this.closeModalButton = "Close modal"
    this.employeesHubPageTitle = "Employees";
    this.addNewEmployeeTitle = "Add new employee";
    this.employeeCountHeader = "Employees (3)"
    this.firstNameField = "First name"
    this.lastNameField = "Last name"
    this.emailAddressField = "Email address"
    this.phoneNumberField = "Phone number (optional)"
    this.startDateField = "Start date (optional)"
    this.jobTitleField = "Job Title"
    this.employeeFirstName1 = "testFirstName1";
    this.employeeLastName1 = "testlastName1";
    this.employeeEmailAddress1 = "test@test1.com";
    this.employeePhoneNumber1 = "07123456789";
    this.employeeFirstName2 = "testFirstName2";
    this.employeeLastName2 = "testlastName2";
    this.employeeEmailAddress2 = "test@test2.com";
    this.employeePhoneNumber2 = "07987654321";
    this.startDate = "12/02/2000"
    this.jobTitle = "Test Engineer";
    this.successTitle = "Success! New employee added"
    this.successMessage = "added to BrightHR Lite"
    this.saveNewEmployeeButton = "Save new employee"
  }

    async assertEmployeesHubURLDisplayed() {
      await this.commonUtils.assertURLDisplayed(new URL(this.employeesHubURL));
    }

    async assertEmployeesPageTitleDisplayed() {
      await this.commonUtils.assertPageTitleIsDisplayed(this.employeesHubPageTitle);
    }

    async assertEmployeeCountTitle() {
      await this.commonUtils.assertPageTitleIsDisplayed(this.employeeCountHeader)
    }

    async assertEmployeeAddedToHub(firstName: string, lastName: string) {
      await this.commonUtils.assertTextDisplayed(`${firstName} ${lastName}`)
    }

    async assertEmployeeRemovedFromHub(firstName: string, lastName: string) {
      await this.commonUtils.assertTextIsNotDisplayed(`${firstName} ${lastName}`)
    }
    
    async assertAddNewEmployeeTitleIsDisplayed () {
      await this.commonUtils.assertPageTitleIsDisplayed(this.addNewEmployeeTitle);
    }

    async assertAddNewEmployeeModalDisplayed() {
      await this.assertAddNewEmployeeTitleIsDisplayed()
    }

    async assertEmployeesHubPageDisplayed() {
      await this.assertEmployeesHubURLDisplayed();
      await this.assertEmployeesPageTitleDisplayed();
    }

    async assertAddEmployeeButtonDisplayed() {
      await this.commonUtils.assertButtonDisplayed(this.addEmployeeButton);
    }

    async assertCloseModalButtonDisplayed() {
      await this.commonUtils.assertButtonDisplayed(this.closeModalButton);
    }

    async assertAddAnotherEmployeeButtonDisplayed() {
      await this.commonUtils.assertButtonDisplayed(this.addAnotherEmployeeButton)
    }

    async assertFirstNameFieldDisplayedAndFillForEmployee1() {
      await this.commonUtils.assertTextBoxDisplayed(this.firstNameField)
      await this.commonUtils.fillTextbox(this.firstNameField, this.employeeFirstName1)
    }
    
    async assertLastNameFieldDisplayedAndFillForEmployee1() {
      await this.commonUtils.assertTextBoxDisplayed(this.lastNameField)
      await this.commonUtils.fillTextbox(this.lastNameField, this.employeeLastName1)
    }

    async assertEmailAddressFieldDisplayedAndFillForEmployee1() {
      await this.commonUtils.assertTextBoxDisplayed(this.emailAddressField)
      await this.commonUtils.fillTextbox(this.emailAddressField, this.employeeEmailAddress1)
    }

    async assertPhoneNumberFieldDisplayedAndFillForEmployee1() {
      await this.commonUtils.assertTextBoxDisplayed(this.phoneNumberField)
      await this.commonUtils.fillTextbox(this.phoneNumberField, this.employeePhoneNumber1)
    }

    async assertFirstNameFieldDisplayedAndFillForEmployee2() {
      await this.commonUtils.assertTextBoxDisplayed(this.firstNameField)
      await this.commonUtils.fillTextbox(this.firstNameField, this.employeeFirstName2)
    }
    
    async assertLastNameFieldDisplayedAndFillForEmployee2() {
      await this.commonUtils.assertTextBoxDisplayed(this.lastNameField)
      await this.commonUtils.fillTextbox(this.lastNameField, this.employeeLastName2)
    }

    async assertEmailAddressFieldDisplayedAndFillForEmployee2() {
      await this.commonUtils.assertTextBoxDisplayed(this.emailAddressField)
      await this.commonUtils.fillTextbox(this.emailAddressField, this.employeeEmailAddress2)
    }

    async assertPhoneNumberFieldDisplayedAndFillForEmployee2() {
      await this.commonUtils.assertTextBoxDisplayed(this.phoneNumberField)
      await this.commonUtils.fillTextbox(this.phoneNumberField, this.employeePhoneNumber2)
    }


    async assertJobTitleFieldDisplayedAndFill() {
      await this.commonUtils.assertTextBoxDisplayed(this.jobTitleField)
      await this.commonUtils.fillTextbox(this.jobTitleField, this.jobTitle)
    }

    async assertStartDateDisplayedAndAddStartDate(){
      await this.commonUtils.assertTextBoxDisplayed(this.startDateField)
      await this.commonUtils.fillTextbox(this.startDateField, this.startDate)
    }

    async assertSuccessEmployeeAddedTitleDisplayed() {
      await this.commonUtils.assertPageTitleIsDisplayed(this.successTitle)
    } 

    async assertSuccessfulMessageDisplayedForAddedEmployeeTest(name: string) {
      await this.commonUtils.assertTextDisplayed(`${name} ${this.successMessage}`)
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
      await this.commonUtils.clickButtonByRole(this.addEmployeeButton);
    }

    async clickAddAnotherEmployeeButton() {
      await this.assertAddAnotherEmployeeButtonDisplayed();
      await this.commonUtils.clickButtonByRole(this.addAnotherEmployeeButton)
    }

    async clickCloseModalButton() {
      await this.assertCloseModalButtonDisplayed();
      await this.commonUtils.clickButtonByRole(this.closeModalButton);
    }

    async clickSaveNewEmployeeButton() {
      await this.commonUtils.clickButtonByRole(this.saveNewEmployeeButton)
    }
}