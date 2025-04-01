import { By, until, WebDriver, WebElementPromise } from 'selenium-webdriver';

export class RztkPage {
    private baseUrl = 'https://rozetka.com.ua/ua/';
    private searhinputSelector = By.css('input[name="search"]');
    private notebookLinkSelector = By.xpath('(//a[@data-testid="fat_menu_category_link"])[1]');

    private get searchInput(): WebElementPromise {
        return this.driver.wait(until.elementLocated(this.searhinputSelector), 10000);
    }
    private get notebookLink(): WebElementPromise {
        return this.driver.wait(until.elementLocated(this.notebookLinkSelector), 10000);
    }

    public constructor(private driver: WebDriver) {}

    public async goto(): Promise<void> {
        await this.driver.get(this.baseUrl);
        await this.driver.wait(until.elementLocated(this.notebookLinkSelector), 10000);
    }

    public async navigateToNotebooks(): Promise<string> {
        await this.notebookLink.click();
        await this.driver.wait(until.elementLocated(this.searhinputSelector), 10000);
        const linkNotebook = await this.driver.getCurrentUrl();
        return linkNotebook;
    }
}
