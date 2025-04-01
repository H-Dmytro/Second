import {expect, test} from '@playwright/test';
import { RztkPage } from 'src/pages/main.page';
import { ComputersCategoryPage } from 'src/pages/computers.category.page';
import { NotebooksSubcategoryPage } from 'src/pages/notebooks.subcategory.page';
import { ComputersCategoryPageWithFilters } from 'src/pages/filters.notebook.category.page';

test.describe('Rozetka tests with computers-notebooks goods', () => {
    let mainPage: RztkPage;
    let computersCategoryPage: ComputersCategoryPage;
    let notebookCategoryPage: NotebooksSubcategoryPage;
    let computersCategoryPageWithFilters: ComputersCategoryPageWithFilters;

    test.beforeEach(async ({ page }) => {
        mainPage = new RztkPage(page);
        computersCategoryPage = new ComputersCategoryPage(page);
        notebookCategoryPage = new NotebooksSubcategoryPage(page);
        computersCategoryPageWithFilters = new ComputersCategoryPageWithFilters(page);
    });

    test('test Rozetka main page', async () => {
        await mainPage.goto();
        await mainPage.notebookLink.waitFor();
        await expect(mainPage.notebookLink).toBeVisible();
    });

    test('should open the Rozetka computers-notebooks page', async () => {
        await mainPage.goto();
        await mainPage.notebookLink.click();
        await computersCategoryPage.notebookCategory.waitFor();
        await expect(computersCategoryPage.notebookCategory).toBeVisible();
    });

    test('should Open Ноутбуки page', async () => {
        await computersCategoryPage.goto();
        await computersCategoryPage.notebookCategory.waitFor();
        await computersCategoryPage.navigateToNotebooks;
        await expect(notebookCategoryPage.notebookSubcategoryPageTitle).toBeVisible();
    });

    test('should filter according to add min and max price value', async () => {
        await notebookCategoryPage.goto();
        await computersCategoryPageWithFilters.setPriceRange('1000', '5000');
        await computersCategoryPageWithFilters.getFilteredGoods();
        await expect(computersCategoryPageWithFilters.catalogSelection).toBeVisible();
    });
});
