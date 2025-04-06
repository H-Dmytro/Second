import { Locator, Page } from '@playwright/test';

export class RztkPage {
    private baseUrl = 'https://rozetka.com.ua/ua/';
    private searchInputSelector = 'input[name="search"]';
    private notebookLinkSelector = '(//a[@data-testid="fat_menu_category_link"])[1]';

    public get searchInput(): Locator {
        return this.page.locator(this.searchInputSelector);
    }
    public get notebookLink(): Locator {
        return this.page.locator(this.notebookLinkSelector);
    }

    public constructor(private page: Page) {}

    public async goto(): Promise<void> {
        await this.page.goto(this.baseUrl);
        await this.notebookLink.waitFor();
    }
    public async navigateToNotebooks(): Promise<void> {
        await this.notebookLink.click();
        await this.searchInput.waitFor();
    }
}
