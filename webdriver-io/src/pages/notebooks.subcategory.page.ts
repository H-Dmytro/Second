import { $, browser } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

export class NotebooksSubcategoryPage {
    private baseUrl = 'https://rozetka.com.ua/ua/notebooks/c80004/';
    private pageTitleSelector = '//h1';

    public get notebookSubcategoryPageTitle(): ChainablePromiseElement {
        return $(this.pageTitleSelector);
    }

    public async goto(): Promise<void> {
        await browser.url(this.baseUrl);
        await this.notebookSubcategoryPageTitle.waitForDisplayed();
    }
}
