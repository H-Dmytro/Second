import { When, Then } from '@cucumber/cucumber';
import { RozetkaWorld } from '../worlds/rozetka.world.ts';
import { ComputersCategoryPageWithFilters } from '../pages/rozetka/filters.notebook.category.page.ts';

When('the user clicks on the {string} button in the price filter', async function (this: RozetkaWorld) {
    const computersCategoryPageWithFilters = new ComputersCategoryPageWithFilters(this.page);
    await computersCategoryPageWithFilters.filterButton.click();
});

Then('the user is able to see the filtered products', async function (this: RozetkaWorld) {
    const computersCategoryPageWithFilters = new ComputersCategoryPageWithFilters(this.page);
    await computersCategoryPageWithFilters.catalogSelection.waitFor({ state: 'visible', timeout: 30000 });
    console.log('The filtered products are visible on the page.');
});
