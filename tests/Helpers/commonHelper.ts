import { Page, expect } from '@playwright/test';

export class commonHelper {
  constructor(
    private readonly page: Page) {}

  async assertTextBoxDisplayed(name: string){
    await expect(this.page.getByRole('textbox', { name: name })).toBeVisible();
  }

  async fillTextbox(name: string, value: string){
    await this.page.getByRole('textbox', { name: name }).fill(value);
  }

  async clickLink(name: string){
    await this.page.getByRole('link', { name: name }).click();
  }

  async clickButton(name: string){
    await this.page.getByRole('button', { name: name, exact: true }).click();
  }
}
