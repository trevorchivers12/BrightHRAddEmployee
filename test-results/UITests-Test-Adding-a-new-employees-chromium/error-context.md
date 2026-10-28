# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UITests.spec.ts >> Test Adding a new employees
- Location: tests/UITests.spec.ts:3:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('testFirstName1 added to BrightHR Lite')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('testFirstName1 added to BrightHR Lite') with timeout 5000ms
  - waiting for getByText('testFirstName1 added to BrightHR Lite')

```

```yaml
- navigation "Main":
  - button "Skip to content"
  - button "Open app switcher modal":
    - img
    - text: Apps
  - button "profile"
  - button "notifications 0"
  - button "scroll nav bar up" [disabled]
  - link "Home":
    - /url: /dashboard
    - img
    - text: Home
  - link "Resources":
    - /url: /resources
    - img
    - text: Resources
  - link "Employees":
    - /url: /employee-hub
    - img
    - text: Employees
  - link "Rotas":
    - /url: /rota-planner
    - img
    - text: Rotas
  - link "Reports":
    - /url: /reports
    - img
    - text: Reports
  - link "Upgrade":
    - /url: /upgrade
    - img
    - text: Upgrade
  - button "All BrightHR products":
    - img
    - paragraph: All
    - paragraph: BrightHR
    - paragraph: products
  - button "scroll nav bar down":
    - img
  - button "Close side draw":
    - img
- banner:
  - link "Bright HR home page":
    - /url: /dashboard
    - img
  - text: Free HR Advice 0800 756 0826
  - list:
    - listitem:
      - img
      - combobox
    - listitem:
      - link "Help":
        - /url: https://elearning.brighthr.com/brighthr/en/hr-lite-help
    - listitem:
      - button "Provide feedback about Bright HR"
    - listitem
    - listitem:
      - link "Logout":
        - /url: /logout
        - img
        - text: Logout
    - listitem:
      - link "Upgrade":
        - /url: /upgrade
- main:
  - heading "Employee hub" [level=1]
  - link "Employees":
    - /url: /employee-hub/manage-employees
  - link "Permissions":
    - /url: /employee-hub/permissions
  - link "Manage teams PREMIUM":
    - /url: /employee-hub/teams
  - link "Who's in PREMIUM":
    - /url: /upgrade/whos-in
  - link "Recruitment PREMIUM":
    - /url: /upgrade/recruitment
  - button "Add employee"
  - textbox:
    - /placeholder: Name or job title...
  - heading "Employees (12)" [level=3]
  - text: TC
  - heading "Trevor Chivers" [level=1]
  - link:
    - /url: /employee-profile/d4ab4fcb-aa82-453e-b8e7-24c383b84fcf
    - img
  - text: TL
  - heading "testFirstName1 lastName1" [level=1]
  - text: Test Engineer
  - link:
    - /url: /employee-profile/4e340e69-59b9-47c3-8dcf-fbe3b2fc63ae
    - img
  - text: TL
  - heading "testFirstName1 lastName1" [level=1]
  - text: Test Engineer
  - link:
    - /url: /employee-profile/5c8e89d0-7898-4ace-be85-48a7f710cae6
    - img
  - text: TL
  - heading "testFirstName1 lastName1" [level=1]
  - text: Test Engineer
  - link:
    - /url: /employee-profile/6b150ab4-d3ab-4eb2-b4e2-d33c74168744
    - img
  - text: TL
  - heading "testFirstName1 lastName1" [level=1]
  - text: Test Engineer
  - link:
    - /url: /employee-profile/9f7067a7-45ea-49e7-a9b3-c0219a0e25a8
    - img
  - text: TL
  - heading "testFirstName1 lastName1" [level=1]
  - text: Test Engineer
  - link:
    - /url: /employee-profile/e6713eae-9ab3-4020-ae22-41c6290bb004
    - img
  - text: TL
  - heading "testFirstName1 lastName1" [level=1]
  - text: Test Engineer
  - link:
    - /url: /employee-profile/086e6c23-e540-421d-98cf-d87b7cf43fb1
    - img
  - text: TL
  - heading "testFirstName2 lastName2" [level=1]
  - text: Test Engineer
  - link:
    - /url: /employee-profile/79f45aef-5d5b-47e5-83e6-dbf3c2a10565
    - img
  - text: TL
  - heading "testFirstName2 lastName2" [level=1]
  - text: Test Engineer
  - link:
    - /url: /employee-profile/e721d907-697e-4343-b13c-5ca7d8d30584
    - img
  - text: TL
  - heading "testFirstName2 lastName2" [level=1]
  - text: Test Engineer
  - link:
    - /url: /employee-profile/4ba91046-0523-4827-89d1-0cdc1aa71e53
    - img
  - text: TL
  - heading "testFirstName2 lastName2" [level=1]
  - text: Test Engineer
  - link:
    - /url: /employee-profile/4bfbb1bd-c5a7-48d5-b220-c6345a0e8013
    - img
  - text: SS
  - heading "sadasda sdadas" [level=1]
  - text: sadasdas
  - link:
    - /url: /employee-profile/6bb007c8-a7c1-435a-b9fc-71954e6112a6
    - img
- img
- dialog:
  - heading "Success! New employee added" [level=1]
  - button "Close modal"
  - img
  - text: testFirstName2 added to BrightHR Lite You can also add or edit the following information to complete your employee’s profile.
  - list:
    - listitem: Phone number
    - listitem: Start date
    - listitem: Job title
    - listitem: Profile picture
  - button "Add another employee"
  - link "Go to profile":
    - /url: /employee-profile/79f45aef-5d5b-47e5-83e6-dbf3c2a10565
  - link "Go to rotas":
    - /url: /rota-planner
```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | 
  3  | export class commonHelper {
  4  |   constructor(
  5  |     private readonly page: Page) {}
  6  | 
  7  |   // Reusable Assertions - simply pass in the variable in test/ pageobject
  8  | 
  9  |   async assertTextBoxDisplayed(name: string){
  10 |     await expect(this.page.getByRole('textbox', { name: name })).toBeVisible();
  11 |   }
  12 | 
  13 |   async assertURLDisplayed(url: URL){
  14 |     await expect(this.page).toHaveURL(url.toString());
  15 |   }
  16 | 
  17 |   async assertOptionDisplayedInSideBar(name: string){
  18 |     await expect(this.page.getByTestId('sideBar').getByRole('link', { name: name })).toBeVisible();
  19 |   }
  20 | 
  21 |   async assertTextDisplayed(name: string){
> 22 |     await expect(this.page.getByText(name)).toBeVisible();
     |                                             ^ Error: expect(locator).toBeVisible() failed
  23 |   }
  24 | 
  25 |   async assertPageTitleIsDisplayed(name: string){
  26 |     await expect(this.page.getByRole('heading', { name: name })).toBeVisible();
  27 |   }
  28 | 
  29 |   async assertLinkDisplayed(name: string){
  30 |     await expect(this.page.getByRole('link', { name: name })).toBeVisible();
  31 |   }
  32 | 
  33 |   async assertButtonDisplayed(name: string){
  34 |     await expect(this.page.getByRole('button', { name: name })).toBeVisible();
  35 |   }
  36 | 
  37 |   async assertLocatorIsDisplayed (id: string){
  38 |     await this.page.locator(id).isVisible();
  39 |   }
  40 | 
  41 | // Resusable entering value to a field
  42 | 
  43 |   async fillTextbox(name: string, value: string){
  44 |     await this.page.getByRole('textbox', { name: name }).fill(value);
  45 |   }
  46 | 
  47 | // resuable click functions
  48 | 
  49 |   async clickOptionInSideBar(name: string){
  50 |     await this.page.getByTestId('sideBar').getByRole('link', { name: name }).click();
  51 |   }
  52 | 
  53 |   async clickLink(name: string){
  54 |     await this.page.getByRole('link', { name: name }).click();
  55 |   }
  56 | 
  57 |   async clickButtonByTestId(name: string){
  58 |     await this.page.getByTestId(name).click();
  59 |   }
  60 | 
  61 |   async clickButtonByRole(name: string){
  62 |     await this.page.getByRole('button', { name: name }).click();
  63 |   }
  64 | 
  65 | };
  66 | 
```