import { test, expect } from '@playwright/test';
// import * as dotenv from 'dotenv';

// dotenv.config();

test('Log in to WordPress site', async ({ page }) => {

  const LogInPageUrl = "http://wordpress-automation.local/wp-login.php?redirect_to=http%3A%2F%2Fwordpress-automation.local%2Fwp-admin%2F&reauth=1";
  const username = "tonnyalam98@gmail.com";
  const password = "@user2024";
  const AdminPageUrl = "http://wordpress-automation.local/wp-admin/";

  // const LogInPageUrl = process.env.LOGIN_PAGE;
  // const username = process.env.USERNAME;
  // const password = process.env.PASSWORD;
  // const AdminPageUrl = process.env.ADMIN_PAGE;

  //LogIn Page
  await page.goto(LogInPageUrl);
  await expect(page).toHaveURL(LogInPageUrl);

  //LogIn Form
  await page.locator('#loginform').isVisible();

  //UserName or Email Address
  await page.getByText('Username or Email Address', { exact: true }).isVisible();
  await page.locator('#user_login').click();
  await page.locator('#user_login').fill(username);

  //Password
  await page.getByText('Password', { exact: true }).isVisible();
  await page.locator('#user_pass').click();
  await page.locator('#user_pass').fill(password);

  //Remember Me
  // page.locator('p').filter({ hasText: 'Remember Me' }).isVisible();
  // await page.locator('#rememberme').check();
  // expect(page.getByLabel('Remember Me')).toBeChecked();

  //LogIn 
  await page.locator('#wp-submit').isVisible();
  await page.locator('#wp-submit').click();

  // Wait for navigation to complete
  // await page.waitForNavigation();

  //Admin Page URL

  await page.goto(AdminPageUrl);
  await expect(page).toHaveURL(AdminPageUrl);

  //Admin Page Heading
  await page.getByRole('heading', { name: 'Welcome to WordPress!' }).isVisible();

});










