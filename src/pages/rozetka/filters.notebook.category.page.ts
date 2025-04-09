import { Locator, Page } from '@playwright/test';
import { PriceFilterElement } from 'src/elements/price-filter.element';

export class ComputersCategoryPageWithFilters {
    private baseUrl = 'https://rozetka.com.ua/ua/computers-notebooks/c80253/';
    private notebookCategorySelector = '//a[@title="Ноутбуки" and contains(@class, "tile-cats__heading")]';
    private computersPageTitleSelector = '//h1';
    private notebookPageTitleSelector = '//h1[text()="Ноутбуки"]';
    private inputMinSelector = '//input[@formcontrolname="min"]';
    private inputMaxSelector = '//input[@formcontrolname="max"]';
    private filterButtonSelector = '//button[text()=" Ok "]';
    private catalogSelectionSelector = '[class="catalog-selection"]';
    private readonly priceFilter: PriceFilterElement;

    public constructor(private readonly page: Page) {
        this.priceFilter = new PriceFilterElement(page.locator('rz-filter-slider'));
    }

    public get notebookCategory(): Locator {
        return this.page.locator(this.notebookCategorySelector);
    }
    public get computersCategoryPageTitle(): Locator {
        return this.page.locator(this.computersPageTitleSelector);
    }
    public get inputMin(): Locator {
        return this.page.locator(this.inputMinSelector);
    }
    public get inputMax(): Locator {
        return this.page.locator(this.inputMaxSelector);
    }
    public get filterButton(): Locator {
        return this.page.locator(this.filterButtonSelector);
    }
    public get catalogSelection(): Locator {
        return this.page.locator(this.catalogSelectionSelector);
    }
    public async goto(): Promise<void> {
        await this.page.goto(this.baseUrl);
        await this.computersCategoryPageTitle.waitFor();
    }

    public async navigateToNotebooks(): Promise<void> {
        await this.notebookCategory.click();
        await this.page.locator(this.notebookPageTitleSelector).waitFor();
    }
    public async setPriceRange(min: string, max: string): Promise<void> {
        await this.inputMin.fill(min);
        await this.inputMin.waitFor();
        await this.inputMax.fill(max);
        await this.inputMax.waitFor();
    }
    public async getFilteredGoods(): Promise<void> {
        await this.filterButton.click();
        await this.catalogSelection.waitFor();
    }
    public async filterByPrice(min: string, max: string): Promise<void> {
        await this.priceFilter.setRange(min, max);
        await this.catalogSelection.waitFor();
    }
}
