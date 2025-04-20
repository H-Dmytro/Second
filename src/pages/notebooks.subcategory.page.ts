import { Locator, Page } from '@playwright/test';

export class NotebooksSubcategoryPage {
    private baseUrl = 'https://rozetka.com.ua/ua/notebooks/c80004/';
    private pageTitleSelector = '//h1';

    public get notebookSubcategoryPageTitle(): Locator {
        return this.page.locator(this.pageTitleSelector);
    }
    public constructor(private page: Page) {}

    public async goto(): Promise<void> {
        await this.page.goto(this.baseUrl);
        await this.notebookSubcategoryPageTitle.waitFor();
    }
}
