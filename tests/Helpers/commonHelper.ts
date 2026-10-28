import { Page, expect } from '@playwright/test';

export class commonHelper {
  constructor(
    private readonly page: Page) {}

  // Reusable Assertions - simply pass in the variable in test/ pageobject

  async assertTextBoxDisplayed(name: string){
    await expect(this.page.getByRole('textbox', { name: name })).toBeVisible();
  }

  async assertURLDisplayed(url: URL){
    await expect(this.page).toHaveURL(url.toString());
  }

  async assertOptionDisplayedInSideBar(name: string){
    await expect(this.page.getByTestId('sideBar').getByRole('link', { name: name })).toBeVisible();
  }

  async assertPageTitleIsDisplayed(name: string){
    await expect(this.page.getByRole('heading', { name: name })).toBeVisible();
  }

  async assertLinkDisplayed(name: string){
    await expect(this.page.getByRole('link', { name: name })).toBeVisible();
  }

  async assertButtonDisplayed(name: string){
    await expect(this.page.getByRole('button', { name: name })).toBeVisible();
  }

  async assertLocatorIsDisplayed (id: string){
    await this.page.locator(id).isVisible();
  }

// Resusable entering value to a field

  async fillTextbox(name: string, value: string){
    await this.page.getByRole('textbox', { name: name }).fill(value);
  }

// resuable click functions

  async clickOptionInSideBar(name: string){
    await this.page.getByTestId('sideBar').getByRole('link', { name: name }).click();
  }

  async clickLink(name: string){
    await this.page.getByRole('link', { name: name }).click();
  }

  async clickButtonByTestId(name: string){
    await this.page.getByTestId(name).click();
  }

  async clickButtonByRole(name: string){
    await this.page.getByRole('button', { name: name }).click();
  }

};
