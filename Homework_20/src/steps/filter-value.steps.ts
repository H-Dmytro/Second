import { When, Then } from '@cucumber/cucumber';
import { RozetkaWorld } from '../worlds/rozetka.world.ts';
import { ComputersCategoryPageWithFilters } from '../pages/rozetka/filters.notebook.category.page.ts';

When('the user sets the price range from {string} to {string}', async function (this: RozetkaWorld, minPrice: string, maxPrice: string) {
    const computersCategoryPageWithFilters = new ComputersCategoryPageWithFilters(this.page);
    await computersCategoryPageWithFilters.setPriceRange(minPrice, maxPrice);
});

Then('the user is able to see the added min and max price', async function (this: RozetkaWorld) {
    const computersCategoryPageWithFilters = new ComputersCategoryPageWithFilters(this.page);
    await computersCategoryPageWithFilters.inputMax.waitFor();
    await computersCategoryPageWithFilters.inputMin.waitFor();
    const minValue = await computersCategoryPageWithFilters.inputMin.inputValue();
    const maxValue = await computersCategoryPageWithFilters.inputMax.inputValue();
    console.log('Min value:', minValue);
    console.log('Max value:', maxValue);
});

