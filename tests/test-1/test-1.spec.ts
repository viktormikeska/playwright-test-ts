import { test } from "@playwright/test";
import { PerformanceResourceTiming } from "node:perf_hooks";

test("Basic navigation", async ({ page }) => {
  await page.goto("https://gitlab.com");
  await page.waitForTimeout(3000);
  await page.reload();
});

test("Interacting with web elements on github", async ({ page }) => {
  await page.goto("https://gitlab.com");
});