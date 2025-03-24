import { expect } from 'chai';
import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';


describe('Puppeteer rozetka tests', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    before(async () => {
        browser = await puppeteer.launch({headless: false, defaultViewport: {width: 1200, height: 800}});
    });

    beforeEach(async () => {
        context = await browser.createBrowserContext();
        page = await context.newPage();
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    after(async () => {
        await browser.close();
    });

    it('should open selected sidebar menu category', async () => {
        await page.goto('https://rozetka.com.ua/', { waitUntil: 'domcontentloaded' });
        await page.locator('::-p-xpath(//button[@data-testid="fat_menu_btn"])').click();
        await page.locator('::-p-xpath(//a[text()=" Планшети"])').click();
        await page.locator('::-p-xpath(//li[@class="checkbox-filter__item"][1]').click();
        const inputSelector = '::-p-xpath//input[(@formcontrolname="min")]';
        await page.waitForSelector(inputSelector);
        await page.type(inputSelector, '1000');
        await page.waitForSelector('.goods-tile__inner', { visible: true});
        const productPrices = await page.$$eval('.goods-tile__price-value', prices =>
            prices.map(price => parseInt((price.textContent || '0').replace(/\D/g, ''), 10))
        );

        productPrices.forEach(price => {
            expect(price).to.be.at.least(1000, 'Product price is lower than the filter value');
        });
    });
});
