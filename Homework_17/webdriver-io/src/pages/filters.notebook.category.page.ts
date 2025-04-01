import { $, browser } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

export class ComputersCategoryPageWithFilters {
    private baseUrl = 'https://rozetka.com.ua/ua/computers-notebooks/c80253/';
    private notebookCategorySelector = '//a[@title="Ноутбуки" and contains(@class, "tile-cats__heading")]';
    private computersPageTitleSelector = '//h1';
    private notebookPageTitleSelector = '//h1[text()="Ноутбуки"]';
    private inputMinSelector = '//input[@formcontrolname="min"]';
    private inputMaxSelector = '//input[@formcontrolname="max"]';
    private filterButtonSelector = '//button[text()=" Ok "]';
    private catalogSelectionSelector = '[class="catalog-selection"]';

    public get notebookCategory(): ChainablePromiseElement {
        return $(this.notebookCategorySelector);
    }
    public get computersCategoryPageTitle(): ChainablePromiseElement {
        return $(this.computersPageTitleSelector);
    }
    public get inputMin(): ChainablePromiseElement {
        return $(this.inputMinSelector);
    }
    public get inputMax(): ChainablePromiseElement {
        return $(this.inputMaxSelector);
    }
    public get filterButton(): ChainablePromiseElement {
        return $(this.filterButtonSelector);
    }
    public get catalogSelection(): ChainablePromiseElement {
        return $(this.catalogSelectionSelector);
    }
    public async goto(): Promise<void> {
        await browser.url(this.baseUrl);
        await this.computersCategoryPageTitle.waitForDisplayed();
    }

    public async navigateToNotebooks(): Promise<void> {
        await this.notebookCategory.click();
        await $(this.notebookPageTitleSelector).waitForDisplayed();
    }
    public async setPriceRange(min: string, max: string): Promise<void> {
        await this.inputMin.setValue(min);
        await this.inputMin.waitForDisplayed();
        await this.inputMax.setValue(max);
        await this.inputMax.waitForDisplayed();
    }
    public async getFilteredGoods(): Promise<void> {
        await this.catalogSelection.click();
        await this.catalogSelection.waitForDisplayed();
    }
}
