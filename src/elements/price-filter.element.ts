import { Locator } from '@playwright/test';

export class PriceFilterElement {
    public constructor(private readonly root: Locator) {}

    public get minInput(): Locator {
        return this.root.locator('input[formcontrolname="min"]');
    }

    public get maxInput(): Locator {
        return this.root.locator('input[formcontrolname="max"]');
    }

    public get applyButton(): Locator {
        return this.root.locator('button:has-text("Ok")');
    }

    public async setRange(min: string, max: string): Promise<void> {
        await this.minInput.fill(min);
        await this.maxInput.fill(max);
        await this.applyButton.click();
    }
}
