import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Loginpage';

const users = [
  { username: 'standard_user', shouldLogin: true },
  { username: 'locked_out_user', shouldLogin: false },
];

users.forEach(({ username, shouldLogin }) => {
  test(`Login test for ${username}`, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(username, 'secret_sauce');

    if (shouldLogin) {
      await expect(page).toHaveURL(/inventory/);
    } else {
      await expect(page.locator('[data-test="error"]')).toBeVisible();
    }
  });
});