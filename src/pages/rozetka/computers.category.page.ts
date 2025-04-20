import { Locator, Page } from '@playwright/test';

export class ComputersCategoryPage {
    private baseUrl = 'https://rozetka.com.ua/ua/computers-notebooks/c80253/';
    private notebookCategorySelector = '//a[@title="Ноутбуки" and contains(@class, "tile-cats__heading")]';
    private computersPageTitleSelector = '//h1';
    private notebookPageTitleSelector = '//h1[text()="Ноутбуки"]';

    public get notebookCategory(): Locator {
        return this.page.locator(this.notebookCategorySelector);
    }

    public get computersCategoryPageTitle(): Locator {
        return this.page.locator(this.computersPageTitleSelector);
    }
    public constructor(private page: Page) {}

    public async goto(): Promise<void> {
        await this.page.goto(this.baseUrl);
        await this.computersCategoryPageTitle.waitFor();
    }

    public async navigateToNotebooks(): Promise<void> {
        await this.notebookCategory.click();
        await this.page.locator(this.notebookPageTitleSelector).waitFor();
    }
}
