import { test, expect } from '@playwright/test';

test.only('Automating Form Submissiions @githubAction', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  const newTodo = await page.getByPlaceholder('What needs to be done?');
  await newTodo.fill('Jon Doe');
  await newTodo.press('Enter');
  await newTodo.fill('JJ Joe');
  await newTodo.press('Enter');

  const firstTodo = page.getByTestId('todo-item').nth(0);
  await firstTodo.getByRole('checkbox').check();

  const secondTodo = page.getByTestId('todo-item').nth(1);
  await expect(firstTodo).toHaveClass('completed');
  await expect(secondTodo).not.toHaveClass('completed');
});

test.only('Handling form', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.fill('[placeholder="What needs to be done?"]', 'Jon Doe');
  await page.locator('[placeholder="What needs to be done?"]').press('Enter');

  const checkbox = await page.locator('.toggle');
  await checkbox.check();
});
