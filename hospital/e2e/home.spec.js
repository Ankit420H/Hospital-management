import { test, expect } from '@playwright/test';

test('homepage loads and shows hospital management title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Hospital management System/);
  await expect(page.locator('.noise-overlay')).toBeVisible();
});
