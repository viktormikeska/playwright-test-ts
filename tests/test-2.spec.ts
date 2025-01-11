import { test, expect } from '@playwright/test';

test.skip('Automating form submissions', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  const newTodo = page.getByPlaceholder('What needs to be done?');
  await newTodo.fill('First task');
  await newTodo.press('Enter');
  await newTodo.fill('Second task');
  await newTodo.press('Enter');
  await page.waitForTimeout(5000);

  const firstTodo = page.getByTestId('todo-item').nth(0);
  await firstTodo.getByRole('checkbox').check();

  const secondTodo = page.getByTestId('todo-item').nth(1);
  await expect(secondTodo).not.toHaveClass('completed');
  await expect(firstTodo).toHaveClass('completed');
});

test.skip('Handling form', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  const placeHolder = '[placeholder="What needs to be done?"]';
  page.fill(placeHolder, 'Jon Doe');
  await page.locator(placeHolder).press('Enter');

  const checkBox = await page.locator('.toggle');
  await checkBox.check();

  await page.waitForTimeout(5000);
});
