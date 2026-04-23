import { Page, Locator } from '@playwright/test';
import { CartPage } from "../pages/CartPage";

export class InventoryPage {
    readonly page: Page;
    readonly cartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartButton = page.locator('.shopping_cart_link');
    }

    getAddToCartButton(itemName: string): Locator {
        return this.page
            .locator('.inventory_item', { hasText: itemName })
            .locator('button');
    }

    async addItemToCart(itemName: string) {
        await this.getAddToCartButton(itemName).click();
    }

    async openCart(): Promise<CartPage> {
        await this.cartButton.click();
        return new CartPage(this.page);
    }
}