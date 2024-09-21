import { test, expect } from '@playwright/test';

test('Check Admin Dashboard Dark Mode', async ({ page }) => {

  const LogInPageUrl = "http://wordpress-automation.local/wp-login.php?redirect_to=http%3A%2F%2Fwordpress-automation.local%2Fwp-admin%2F&reauth=1";
  const username = "tonnyalam98@gmail.com";
  const password = "@user2024";
  const AdminPageUrl = "http://wordpress-automation.local/wp-admin/";

  //LogIn 
  await page.goto(LogInPageUrl);
  await page.locator('#user_login').fill(username);
  await page.locator('#user_pass').fill(password);
  await page.locator('#wp-submit').click();
  await page.goto(AdminPageUrl);

  //Enable Admin DashBoard Dark Mode
  await page.getByRole('link', { name: 'WP Dark Mode', exact: true }).click();
  await page.getByRole('link', { name: 'Admin Panel Dark Mode'}).click();
  await page.waitForTimeout(3000);
  await page.locator('label').filter({ hasText: 'Enable Admin Dashboard Dark Mode' }).locator('span').click();
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await expect(page.getByText('Saved Successfully')).toBeVisible();

  //Frontend Dark Mode
  // await page.getByRole('link', { name: 'Frontend Dark Mode'}).click();
  // await page.waitForTimeout(3000);
  // const isDarkModeActive = await page.locator('.bg-blue-600').isVisible();
  // await page.waitForTimeout(3000);
  // const isDarkModeDeactive = await page.locator('.bg-slate-200').isVisible();
  // await page.waitForTimeout(3000);

  await page.getByRole('link', { name: 'Frontend Dark Mode' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('heading', { name: 'Choose how you want to use' }).isVisible();
  await page.locator('label').filter({ hasText: 'Default Light Mode' }).locator('span').first().isEnabled();
  await page.locator('label').filter({ hasText: 'Default Dark Mode' }).locator('span').first().isEnabled();
  await page.locator('label').filter({ hasText: 'Use system settings' }).locator('span').first().isEnabled();

});