import { expect, test } from '@playwright/test';

test.describe('landing page', () => {
  test('should render the text', async ({ page }) => {
    await page.goto('/pt-BR');

    const lang = await page.evaluate(() => {
      return globalThis.location.pathname.split('/')[1];
    });

    await expect(page.getByText(`Current locale: ${lang}`)).toBeVisible();
    await expect(
      page.getByText('This text is rendered on the server:'),
    ).toBeVisible();
  });
});
