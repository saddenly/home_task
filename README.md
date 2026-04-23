# QA Playwright Task

This repository contains end-to-end UI tests for https://www.saucedemo.com using Playwright and the Page Object Model (POM) pattern.

## What This Repo Does

- Validates login behavior for different user types.
- Validates adding an item to the cart after a successful login.
- Runs tests across Chromium, Firefox, and WebKit.
- Generates an HTML test report.

## Tech Stack

- TypeScript
- Playwright Test (`@playwright/test`)
- Node.js + npm

## Project Structure

```text
.
├── pages/
│   ├── LoginPage.ts
│   ├── InvetoryPage.ts
│   └── CartPage.ts
├── tests/
│   ├── login.spec.ts
│   └── add_to_cart.spec.ts
├── playwright.config.ts
└── package.json
```

## Requirements

Before running tests, make sure you have:

- Node.js 18+ (LTS recommended)
- npm 9+
- Internet access (tests run against `https://www.saucedemo.com`)

## Setup

1. Install dependencies:

```bash
npm install
```

2. Install Playwright browsers:

```bash
npx playwright install
```

## Run Tests

Run all tests in all configured browsers:

```bash
npx playwright test
```

Run only login tests:

```bash
npx playwright test tests/login.spec.ts
```

Run only add-to-cart tests:

```bash
npx playwright test tests/add_to_cart.spec.ts
```

Run in headed mode:

```bash
npx playwright test --headed
```

Run in Playwright UI mode:

```bash
npx playwright test --ui
```

## View Test Report

After running tests, open the HTML report:

```bash
npx playwright show-report
```

## Notes

- Base URL is configured in `playwright.config.ts`.
- Login tests cover both successful and failed authentication paths.
- Add-to-cart test uses a logged-in fixture and verifies the item in the cart.
