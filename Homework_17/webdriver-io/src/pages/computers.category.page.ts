import { $, browser } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

export class ComputersCategoryPage {
    private baseUrl = 'https://rozetka.com.ua/ua/computers-notebooks/c80253/';
    private notebookCategorySelector = '//a[@title="Ноутбуки" and contains(@class, "tile-cats__heading")]';
    private computersPageTitleSelector = '//h1';
    private notebookPageTitleSelector = '//h1[text()="Ноутбуки"]';

    public get notebookCategory(): ChainablePromiseElement {
        return $(this.notebookCategorySelector);
    }

    public get computersCategoryPageTitle(): ChainablePromiseElement {
        return $(this.computersPageTitleSelector);
    }

    public async goto(): Promise<void> {
        await browser.url(this.baseUrl);
        await this.computersCategoryPageTitle.waitForDisplayed();
    }

    public async navigateToNotebooks(): Promise<void> {
        await this.notebookCategory.click();
        await $(this.notebookPageTitleSelector).waitForDisplayed();
    }
}
