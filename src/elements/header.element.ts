import { Locator } from '@playwright/test';

export class HeaderElement {
    private get headerElements (): Locator {
        return this.baseLocator.locator('[class="header"]');
    }

    private get menuButton(): Locator {
        return this.headerElements.locator('[data-testid="menu_button"]');
    }

    private get catalogButton(): Locator {
        return this.headerElements.locator('[data-testid="fat_menu_btn"]');
    }

    public get searchInput(): Locator {
        return this.headerElements.locator('.search-form__input');
    }

    private get searchButton(): Locator {
        return this.headerElements.locator('.search-form__submit');
    }

    private get languageButton(): Locator {
        return this.headerElements.locator('[data-testid="lang_btn"]');
    }

    private get cartButton(): Locator {
        return this.headerElements.locator('[aria-label="Відкрити корзину"]');
    }

    public constructor(private readonly baseLocator: Locator) {}

    public async waitForHeaderLoaded(): Promise<void> {
        await this.headerElements.waitFor({ state: 'visible' });
    }

    public async clickMenuButton(): Promise<void> {
        await this.menuButton.waitFor({ state: 'visible' });
        await this.menuButton.click();
    }

    public async clickCatalogButton(): Promise<void> {
        await this.catalogButton.click();
    }

    public async enterSearchText(text: string): Promise<void> {
        await this.searchInput.fill(text);
    }

    public async clickSearchButton(): Promise<void> {
        await this.searchButton.click();
    }

    public async searchFor(text: string): Promise<void> {
        await this.enterSearchText(text);
        await this.clickSearchButton();
    }

    public async clickLanguageButton(): Promise<void> {
        await this.languageButton.click();
    }

    public async clickCartButton(): Promise<void> {
        await this.cartButton.click();
    }
}
