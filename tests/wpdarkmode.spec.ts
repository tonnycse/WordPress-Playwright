import { test, expect } from '@playwright/test';

test('Check WP Dark Mode', async ({ page }) => {

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

  //Plugins Link
  await page.getByRole('link', { name: 'Plugins', exact: true }).isVisible();
  await page.getByRole('link', { name: 'Plugins', exact: true }).click();

  //Installed Plugins Page
  await page.getByRole('link', { name: 'Installed Plugins' }).isVisible();
  await page.getByRole('link', { name: 'Installed Plugins' }).click();

  //Search Bar
  await page.locator('#plugin-search-input').isVisible();
  await page.getByLabel('Search installed plugins').click();

  //Search WP DARK MODE
  await page.getByLabel('Search installed plugins').fill('WP Dark Mode');
  await page.getByLabel('Search installed plugins').press('Enter');

  //WP Dark Mode, Active/ Deactive
  await page.getByRole('cell', { name: 'WP Dark Mode Settings |' }).getByRole('strong').isVisible();
  const isDarkModeActive = page.locator('#deactivate-wp-dark-mode');
  await expect(isDarkModeActive).toBeEnabled();
  // const isDarkModeInactive = page.locator('#activate-wp-dark-mode');
  // await expect(isDarkModeInactive ).toBeEnabled();


});