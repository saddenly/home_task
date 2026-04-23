import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getCartItem(itemName: string): Locator {
        return this.page.locator('.cart_item', { hasText: itemName });
    }

    async verifyItemInCart(itemName: string) {
        await expect(this.getCartItem(itemName)).toBeVisible();
    }
}