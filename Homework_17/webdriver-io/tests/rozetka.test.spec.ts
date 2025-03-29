import { $, browser, expect } from '@wdio/globals';
import { RztkPage } from 'src/pages/main.page';
import { ComputersCategoryPage } from 'src/pages/computers.category.page';
import { NotebooksSubcategoryPage } from 'src/pages/notebooks.subcategory.page';

describe('Rozetka tests with computers-notebooks goods', () => {
    let mainPage: RztkPage;
    let computersCategoryPage: ComputersCategoryPage;
    let notebookCategoryPage: NotebooksSubcategoryPage;

    before(async () => {
        await browser.maximizeWindow();
        mainPage = new RztkPage();
        computersCategoryPage = new ComputersCategoryPage();
        notebookCategoryPage = new NotebooksSubcategoryPage();
    });

    it('test Rozetka main page', async () => {
        await mainPage.goto();
        await mainPage.notebookLink.waitForDisplayed();
        await expect(mainPage.notebookLink).toBeDisplayed();
    });

    it('should open the Rozetka computers-notebooks page', async () => {
        await mainPage.goto();
        await mainPage.notebookLink.click();
        await computersCategoryPage.notebookCategory.waitForDisplayed();
        await expect(computersCategoryPage.notebookCategory).toBeDisplayed();
    });

    it('should Open Ноутбуки page', async () => {
        await computersCategoryPage.goto();
        await computersCategoryPage.notebookCategory.waitForDisplayed();
        await computersCategoryPage.navigateToNotebooks;
        await expect(notebookCategoryPage.notebookSubcategoryPageTitle).toBeDisplayed();
    });

    it('should filter according to add min and max price value', async () => {
        await notebookCategoryPage.goto();
        const inputMin = $('//input[@formcontrolname="min"]');
        const inputMax = $('//input[@formcontrolname="max"]');
        await inputMin.waitForDisplayed();
        await inputMin.setValue('1000');
        await inputMax.waitForDisplayed();
        await inputMax.setValue('5000');
        const filterButton = $('//button[text()=" Ok "]');
        await filterButton.click();
        const catalogSelection = $('[class="catalog-selection"]');
        await catalogSelection.waitForDisplayed();
    });
});
