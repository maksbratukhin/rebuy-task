import { test, expect } from '@playwright/test';

const API_URL = 'http://localhost:3000';
const APP_URL = 'http://localhost:4200';

test.describe('Rebuy Marketplace E2E Tests', () => {
  test.beforeAll(async () => {
    const apiResponse = await fetch(`${API_URL}/api/health`);
    if (!apiResponse.ok) {
      console.warn('API server might not be running. Some tests may fail.');
    }
  });

  test('should display the marketplace homepage', async ({ page }) => {
    await page.goto(APP_URL);
    await expect(page.getByRole('heading', { name: 'Marketplace Offers' })).toBeVisible();
    await expect(page.locator('p')).toContainText('Browse and vote');
  });

  test('should display offer cards', async ({ page }) => {
    await page.goto(APP_URL);
    await page.waitForSelector('rb-offer-card', { timeout: 5000 });
    const offerCards = await page.locator('rb-offer-card').count();
    expect(offerCards).toBeGreaterThan(0);
  });

  test('should navigate to offer details when clicking a card', async ({ page }) => {
    await page.goto(APP_URL);
    await page.waitForSelector('rb-offer-card');
    await page.locator('rb-offer-card').first().click();
    await expect(page).toHaveURL(/\/offers\/\d+/);
    await expect(page.getByRole('heading', { name: /iPhone|MacBook|Sony/ })).toBeVisible();
  });

  test('should show back button on details page', async ({ page }) => {
    await page.goto(`${APP_URL}/offers/1`);
    await page.waitForSelector('button');
    const backButton = page.locator('button', { hasText: 'Back to offers' });
    await expect(backButton).toBeVisible();
  });

  test('should navigate back to homepage from details', async ({ page }) => {
    await page.goto(`${APP_URL}/offers/1`);
    await page.getByRole('button', { name: 'Back to offers' }).click({ force: true });
    await expect(page).toHaveURL(APP_URL);
  });

  test('should display merchant information on details page', async ({ page }) => {
    await page.goto(`${APP_URL}/offers/1`);
    await expect(page.locator('text=Merchant Information')).toBeVisible();
    await expect(page.locator('rb-rating')).toBeVisible();
  });

  test('should show purchase button when stock is available', async ({ page }) => {
    await page.goto(`${APP_URL}/offers/1`);
    const purchaseButton = page.locator('rb-button', { hasText: 'Purchase Now' });
    await expect(purchaseButton).toBeVisible();
  });

  test('should show purchase form when clicking purchase button', async ({ page }) => {
    await page.goto(`${APP_URL}/offers/1`);
    await page.locator('rb-button', { hasText: 'Purchase Now' }).click();
    await expect(page.locator('text=Complete Purchase')).toBeVisible();
    await expect(page.locator('input[type="number"]')).toBeVisible();
  });

  test('should show vote counts on offer cards', async ({ page }) => {
    await page.goto(APP_URL);
    await page.waitForSelector('rb-offer-card');
    const voteCount = page.locator('rb-offer-card').first().locator('.font-semibold.text-gray-700');
    await expect(voteCount).toBeVisible();
  });

  test('should display category badges', async ({ page }) => {
    await page.goto(`${APP_URL}/offers/1`);
    await expect(page.locator('.bg-blue-100')).toBeVisible();
    await expect(page.locator('.bg-green-100')).toBeVisible();
  });

  test('should show responsive layout', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(APP_URL);
    await page.waitForSelector('rb-offer-card');
    const cards = await page.locator('rb-offer-card').count();
    expect(cards).toBeGreaterThan(0);
  });
});

