import { test, expect } from '@playwright/test';

test('Change Floating Switch Style', async ({ page }) => {

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

  // Change By Default Floating Switch Style 
  await page.getByRole('link', { name: 'WP Dark Mode' }).click();
  await page.getByRole('heading', { name: 'Customization' }).isVisible();
  await page.getByRole('heading', { name: 'Customization' }).click();
  await page.getByRole('link', { name: 'Switch Settings' }).isVisible();
  await page.getByRole('link', { name: 'Switch Settings' }).click();
  await page.locator('div.flex.flex-wrap.gap-3 > div:not(._selected)').first().click();

  await page.getByRole('button', { name: 'Save Changes' }).click();
  await expect(page.getByText('Saved Successfully')).toBeVisible();

    // await page.locator('.bg-\\[\\#F9FAFB\\]').first().isVisible();
    // await page.locator('div').filter({ hasText: /^LightDark$/ }).first().isVisible();
    // await page.locator('.rounded > div:nth-child(2) > div:nth-child(3)').first().isVisible();

    // await (page.locator('div:not(._selected)')).click();
    // await page.locator('div.flex.flex-wrap.gap-3 div:not(._selected)').click();

  //

  //Select Custom Switch size & Scale it to 220
  await page.locator('div').filter({ hasText: /^Custom$/ }).locator('span').isVisible();
  await page.locator('div').filter({ hasText: /^Custom$/ }).locator('span').click();
  await page.getByRole('slider').fill('220');
  await expect(page.getByRole('slider')).toHaveValue('220');
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await expect(page.getByText('Saved Successfully')).toBeVisible();

  // Change the Floating Switch Position (Left)
  await page.getByText('Left').click();
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await expect(page.getByText('Saved Successfully')).toBeVisible();

  // Disable the Keyboard Shortcut from the Accessibility Settings
  await page.getByRole('link', { name: 'Accessibility', exact: true }).click();
  await page.locator('label').filter({ hasText: 'Keyboard Shortcut' }).locator('div').nth(1).click();
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await expect(page.getByText('Saved Successfully')).toBeVisible();

  //Site Animation
  await page.getByRole('link', { name: 'Site Animation' }).click();
  await page.locator('label div').nth(1).click();
  await page.locator('.flex > .rounded > div:nth-child(2) > .flex').first().click();
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await expect(page.getByText('Saved Successfully')).toBeVisible();

 





});