import { $, browser } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';
export class RztkPage {
    private baseUrl = 'https://rozetka.com.ua/ua/';
    private searchInputSelector = 'input[name="search"]';
    private notebookLinkSelector = '(//a[@data-testid="fat_menu_category_link"])[1]';

    public get searchInput(): ChainablePromiseElement {
        return $(this.searchInputSelector);
    }
    public get notebookLink(): ChainablePromiseElement {
        return $(this.notebookLinkSelector);
    }

    public async goto(): Promise<void> {
        await browser.url(this.baseUrl);
        await this.notebookLink.waitForDisplayed();
    }
    public async navigateToNotebooks(): Promise<void> {
        await this.notebookLink.click();
        await this.searchInput.waitForDisplayed();
    }
}
