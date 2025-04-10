import { Locator, Page } from '@playwright/test';
import { HeaderElement } from 'src/elements/header.element';
import { notebookLinkSelector } from 'src/elements/main-page.element';

export class MainPage {
    private baseUrl = 'https://rozetka.com.ua/ua/';

    private readonly headerElement: HeaderElement;

    public constructor(private readonly page: Page) {
        this.headerElement = new HeaderElement(this.page.locator('body'));
    }
    public get header(): HeaderElement {
        return this.headerElement;
    }
    public get notebookLink(): Locator {
        return this.page.locator(notebookLinkSelector);
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
