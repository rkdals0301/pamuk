import { fileURLToPath, URL } from 'node:url'
import { expect, test } from '@playwright/test'
import { loadEnv } from 'vite'

const { VUE_APP_BASE_URL } = loadEnv(
  'production', fileURLToPath(new URL('../', import.meta.url)), 'VUE_APP_'
)
const recipeUrl = `${VUE_APP_BASE_URL.replace(/\/+$/, '')}/users`

test.beforeEach(async ({ page }) => {
  await page.route('https://fonts.googleapis.com/**', route =>
    route.fulfill({ contentType: 'text/css', body: '' })
  )
  // Keep the smoke tests independent of the image provider.
  await page.route('https://image.shutterstock.com/**', route =>
    route.fulfill({ contentType: 'image/svg+xml', body: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"/>' })
  )
})

test('opens and reloads the recipe page from the production build', async ({ page }) => {
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  await page.route(recipeUrl, route =>
    route.fulfill({ json: [], headers: { 'Access-Control-Allow-Origin': '*' } })
  )
  const loaded = page.waitForResponse(recipeUrl)
  await page.goto('/')
  expect((await loaded).status()).toBe(200)
  await expect(page).toHaveURL(/#\/recipe$/)
  await expect(page.getByText('된장찌개', { exact: true })).toBeVisible()
  await expect(page.getByText('함흥냉면', { exact: true })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Recipe' })).toBeVisible()

  await page.reload()
  await expect(page.getByText('된장찌개', { exact: true })).toBeVisible()
  expect(errors).toEqual([])
})

test('shows and dismisses the notification when the recipe request fails', async ({ page }) => {
  await page.route(recipeUrl, route =>
    route.fulfill({ status: 503, json: {}, headers: { 'Access-Control-Allow-Origin': '*' } })
  )
  await page.goto('/#/recipe')
  const message = page.getByText('Request failed with status code 503')
  await expect(message).toBeVisible()
  await page.getByRole('button', { name: 'Close' }).click()
  await expect(message).toBeHidden()
  await expect(page.getByText('된장찌개', { exact: true })).toBeVisible()
})
