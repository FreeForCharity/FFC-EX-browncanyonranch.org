import { test, expect } from '@playwright/test'

/**
 * Smoke tests for the Friends of the Brown Canyon Ranch site.
 *
 * Confirm the static export renders core information for visitors:
 * who we are, where we are, and the eight navigation routes that
 * mirror the legacy WordPress site.
 */

test.describe('Home page', () => {
  test('renders the organization name and tagline', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Friends of the Brown Canyon Ranch/i)
    await expect(
      page.getByRole('heading', { name: /Unlock history\. Preserve the future\./i })
    ).toBeVisible()
  })

  test('shows the Hereford mailing address and phone number', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText(/P\.O\. Box 996/i).first()).toBeVisible()
    await expect(page.getByText(/Hereford, AZ 85615/i).first()).toBeVisible()
    await expect(page.locator('a[href="tel:+15203780311"]').first()).toBeVisible()
  })

  test('links to the parent Coronado NF Heritage Society', async ({ page }) => {
    await page.goto('/')
    const link = page.locator('a[href*="coronadonationalforestheritagesociety.org"]').first()
    await expect(link).toBeVisible()
  })

  test('links to the Facebook page', async ({ page }) => {
    await page.goto('/')
    const fb = page.locator('a[href*="facebook.com"]').first()
    await expect(fb).toBeVisible()
  })

  test('has no console errors on load', async ({ page }) => {
    const errors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text())
    })
    await page.goto('/')
    expect(errors).toEqual([])
  })
})

test.describe('Navigation routes', () => {
  const routes: Array<{ path: string; heading: RegExp }> = [
    { path: '/join/', heading: /Join the Friends of the Brown Canyon Ranch/i },
    { path: '/visitor-info/', heading: /Brown Canyon Ranch/i },
    { path: '/news/', heading: /Latest from the ranch/i },
    { path: '/programs/', heading: /The Western Heritage Program/i },
    { path: '/gallery/', heading: /The ranch in pictures/i },
    { path: '/contact/', heading: /Get in touch/i },
    { path: '/donate/', heading: /Help preserve Brown Canyon Ranch/i },
  ]

  for (const { path, heading } of routes) {
    test(`renders ${path}`, async ({ page }) => {
      await page.goto(path)
      await expect(page.getByRole('heading', { name: heading }).first()).toBeVisible()
    })
  }
})

test.describe('Policy pages', () => {
  test('privacy policy renders', async ({ page }) => {
    await page.goto('/privacy-policy/')
    await expect(page.getByRole('heading', { name: /Privacy Policy/i })).toBeVisible()
  })

  test('terms of service renders', async ({ page }) => {
    await page.goto('/terms-of-service/')
    await expect(page.getByRole('heading', { name: /Terms of Service/i })).toBeVisible()
  })
})
