import { Locator, Page } from '@playwright/test';

export class NotebooksSubcategoryPage {
    private baseUrl = 'https://rozetka.com.ua/ua/notebooks/c80004/';
    private pageTitleSelector = '//h1';

    public constructor(private page: Page) {}

    public get notebookSubcategoryPageTitle(): Locator {
        return this.page.locator(this.pageTitleSelector);
    }

    public async open(): Promise<void> {
        await this.page.goto(this.baseUrl);
        await this.notebookSubcategoryPageTitle.waitFor();
    }
}
