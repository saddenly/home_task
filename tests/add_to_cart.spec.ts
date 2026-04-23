import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/Loginpage';

const test = base.extend({
    loggedInInventoryPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        const inventoryPage = await loginPage.login('standard_user', 'secret_sauce');
        use(inventoryPage);
    },
});

test('Successfully add item to cart', async ({ loggedInInventoryPage }) => {
    const itemName = "Sauce Labs Backpack";

    await loggedInInventoryPage.addItemToCart(itemName);
    const cartPage = await loggedInInventoryPage.openCart();

    await cartPage.verifyItemInCart(itemName);
})