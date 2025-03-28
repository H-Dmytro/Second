import { By, WebDriver, until } from 'selenium-webdriver';
import { closeBrowserInstance, getBrowserInstance } from '../src/driver-manager';
import { RztkPage } from '../src/pages/rozetka-computers-notebooks.page';

describe('Rozetka tests with computers-notebooks goods', () => {
    let driver: WebDriver;
    let mainPage: RztkPage;
    let linkNotebooksComputers: string;
    let linkNotebooks: string;

    before(async () => {
        driver = await getBrowserInstance();
        mainPage = new RztkPage(driver);
    });

    after(async () => {
        await closeBrowserInstance(driver);
    });

    it('should open the Rozetka computers-notebooks page', async () => {
        await mainPage.goto();
        await mainPage.navigateToNotebooks();
        await driver.wait(until.elementsLocated(By.xpath('(//a[@title="Ноутбуки" and contains(@class, "tile-cats__heading")])')), 10000);
        linkNotebooksComputers = await driver.getCurrentUrl();
    });

    it('should Open Ноутбуки page', async () => {
        if (!linkNotebooksComputers) throw new Error('Link to Notebooks page is not defined');
        await driver.get(linkNotebooksComputers);
        await driver.wait(until.elementsLocated(By.xpath('//a[@title="Ноутбуки" and contains(@class, "tile-cats__heading")]')), 10000);
        await driver.findElement(By.xpath('//a[@title="Ноутбуки" and contains(@class, "tile-cats__heading")]')).click();
        linkNotebooks = await driver.getCurrentUrl();

    });
    it('should filter according to add min and max price value', async () => {
        if (!linkNotebooks) throw new Error('Link to Notebooks page is not defined');
        await driver.get(linkNotebooks);
        const inputMin = By.xpath('//input[@formcontrolname="min"]');
        await driver.wait(until.elementIsEnabled(driver.findElement(inputMin)), 10000);
        await driver.findElement(inputMin).clear();
        await driver.findElement(inputMin).sendKeys('1000');
        const inputMax = By.xpath('//input[@formcontrolname="max"]');
        await driver.wait(until.elementIsEnabled(driver.findElement(inputMax)), 10000);
        await driver.findElement(inputMax).clear();
        await driver.findElement(inputMax).sendKeys('5000');
        await driver.findElement(By.xpath('//button[text()=" Ok "]')).click();
        await driver.wait(until.elementLocated(By.css('[class="catalog-selection"]')), 10000);
    });
});

