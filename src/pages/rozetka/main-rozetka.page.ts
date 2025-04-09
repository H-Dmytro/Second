import { Locator, Page } from '@playwright/test';
import { HeaderElement } from 'src/elements/header.element';

export class MainPage {
    private baseUrl = 'https://rozetka.com.ua/ua/';
    private notebookLinkSelector = '(//a[@data-testid="fat_menu_category_link"])[1]';

    private readonly headerElement: HeaderElement;

    public constructor(private readonly page: Page) {
        this.headerElement = new HeaderElement(this.page.locator('body')); // або більш конкретний локатор
    }

    public get header(): HeaderElement {
        return this.headerElement;
    }
    public getPage(): Page {
        return this.page;
    }
    public get notebookLink(): Locator {
        return this.page.locator(this.notebookLinkSelector);
    }
    public async goto(): Promise<void> {
        await this.page.goto(this.baseUrl);
        await this.header.clickMenuButton();
        await this.notebookLink.waitFor();
    }

    public async navigateToNotebooks(): Promise<void> {
        await this.notebookLink.click();
        await this.header.searchFor('Notebook');
    }
}
