import { test } from '@playwright/test';

test.skip('Basic navigation', async ({ page }) => {
  await page.goto('https://gitlab.com');
  await page.waitForTimeout(300);
  await page.reload();
});

test.skip('Interacting with web elements on github', async ({ page }) => {
  await page.goto('https://gitlab.com');
  await page.click('#onetrust-accept-btn-handler');
  await page
    .locator('#be-navigation-desktop')
    .getByRole('link', { name: 'Get free trial' })
    .click();
  await page.getByTestId('new-user-first-name-field').fill('John1');
  await page.getByTestId('new-user-last-name-field').fill('Snow1');
});
