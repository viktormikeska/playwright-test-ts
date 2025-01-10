import { test } from "@playwright/test";
import { PerformanceResourceTiming } from "node:perf_hooks";

test("Basic navigation", async ({ page }) => {
  await page.goto("https://gitlab.com");
  await page.waitForTimeout(300);
  await page.reload();
});

test("Interacting with web elements on github", async ({ page }) => {
  await page.goto("https://gitlab.com");
  await page.click("#onetrust-accept-btn-handler");
  await page
    .locator("#be-navigation-desktop")
    .getByRole("link", { name: "Get free trial" })
    .click();
  await page.getByTestId("new-user-first-name-field").fill("John1");
  await page.getByTestId("new-user-last-name-field").fill("Snow1");
});
