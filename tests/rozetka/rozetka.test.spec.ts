import { expect, test } from '@playwright/test';
import { MainPage } from 'src/pages/rozetka/main-rozetka.page';
import { ComputersCategoryPageWithFilters } from 'src/pages/rozetka/filters.notebook.category.page';

test.describe('Rozetka header + main page tests', () => {
    let mainPage: MainPage;
    let pageWithFilters: ComputersCategoryPageWithFilters;
    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);
        pageWithFilters = new ComputersCategoryPageWithFilters(page);

    });
    test('Main page opens and header is visible', async () => {
        await mainPage.goto();
        await mainPage.header.waitForHeaderLoaded();
        await expect(mainPage.notebookLink).toBeVisible();
    });

    test('Search notebooks via header', async () => {
        await mainPage.goto();
        await mainPage.header.searchFor('Ноутбук');
        await expect(mainPage.getPage().locator('.search-form__input')).toHaveValue('Ноутбук');
    });

    test('Navigate to notebook category from menu', async () => {
        await mainPage.goto();
        await mainPage.navigateToNotebooks();
        await expect(mainPage.getPage().locator('.search-form__input')).toHaveValue('Notebook');
    });
    test('Navigate to notebook subcategory and apply price filter', async () => {
        await pageWithFilters.goto();
        await pageWithFilters.navigateToNotebooks();
        await pageWithFilters.filterByPrice('8000', '15000');

        await expect(pageWithFilters.catalogSelection).toBeVisible();
    });
});
