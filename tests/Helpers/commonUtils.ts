import { Page, expect } from '@playwright/test';

export class commonUtils {
  constructor(
    private readonly page: Page) {}

  // Reusable Assertions 

  async assertTextBoxDisplayed(name: string){
    await expect(this.page.getByRole('textbox', { name: name })).toBeVisible();
  }

  async assertURLDisplayed(url: URL){
    await expect(this.page).toHaveURL(url.toString());
  }

  async assertOptionDisplayedInSideBar(name: string){
    await expect(this.page.getByTestId('sideBar').getByRole('link', { name: name })).toBeVisible();
  }

  async assertTextDisplayed(text: string){
    await expect(this.page.getByText(text)).toBeVisible();
  }

  async assertTextIsNotDisplayed(text: string){
    await expect(this.page.getByText(text)).not.toBeVisible();
  }

  async assertPageTitleIsDisplayed(title: string){
    await expect(this.page.getByRole('heading', { name: title })).toBeVisible();
  }

  async assertLinkDisplayed(link: string){
    await expect(this.page.getByRole('link', { name: link })).toBeVisible();
  }

  async assertButtonDisplayedByRole(button: string){
    await expect(this.page.getByRole('button', { name: button })).toBeVisible();
  }

  async assertButtonDisplayedById(button: string){
    await expect(this.page.getByTestId(button)).toBeVisible();
  }

  async assertLocatorIsDisplayed (id: string){
    await this.page.locator(id).isVisible();
  }

// Resusable entering value to a field/textbox

  async fillTextbox(name: string, value: string){
    await this.page.getByRole('textbox', { name: name }).fill(value);
  }

// resuable click functions

  async clickOptionInSideBar(option: string){
    await this.page.getByTestId('sideBar').getByRole('link', { name: option }).click();
  }

  async clickLink(link: string){
    await this.page.getByRole('link', { name: link }).click();
  }

  async clickButtonByTestId(button: string){
    await this.page.getByTestId(button).click();
  }

  async clickButtonByRole(button: string){
    await this.page.getByRole('button', { name: button }).click();
  }
};
