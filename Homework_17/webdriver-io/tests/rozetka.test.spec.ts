import { $, browser, expect } from '@wdio/globals';
import { RztkPage } from 'src/pages/rozetka.page';

describe('Rozetka tests with computers-notebooks goods', () => {
    let linkNotebooksComputers: string;
    let linkNotebooks: string;
    let mainPage: RztkPage;

    before(async () => {
        await browser.maximizeWindow();
        mainPage = new RztkPage();
    });
    it('test Rozetka main page', async () => {
        await mainPage.goto();
        const notebookCategory = $(mainPage.notebookLinkSelector);
        await notebookCategory.waitForDisplayed();
        await expect(notebookCategory).toBeDisplayed();
    });

    it('should open the Rozetka computers-notebooks page', async () => {
        await mainPage.goto();
        const notebookLink = $(mainPage.notebookLinkSelector);
        await notebookLink.click();
        linkNotebooksComputers = await browser.getUrl();
    });

    it('should Open Ноутбуки page', async () => {
        await browser.url(linkNotebooksComputers);
        const notebooksLink = $('//a[@title="Ноутбуки" and contains(@class, "tile-cats__heading")]');
        await notebooksLink.waitForDisplayed();
        await notebooksLink.click();
        linkNotebooks = await browser.getUrl();
    });

    it('should filter according to add min and max price value', async () => {
        if (!linkNotebooks) throw new Error('Link to Notebooks page is not defined');
        await browser.url(linkNotebooks);
        const inputMin = $('//input[@formcontrolname="min"]');
        const inputMax = $('//input[@formcontrolname="max"]');
        await inputMin.waitForEnabled();
        await inputMin.setValue('1000');
        await inputMax.waitForEnabled();
        await inputMax.setValue('5000');
        const filterButton = $('//button[text()=" Ok "]');
        await filterButton.click();
        const catalogSelection = $('[class="catalog-selection"]');
        await catalogSelection.waitForDisplayed();
    });
});
