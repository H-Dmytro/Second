import { Given } from '@cucumber/cucumber';
import { RozetkaWorld } from '../worlds/rozetka.world.ts';
import { NotebooksSubcategoryPage } from '../pages/rozetka/notebooks.subcategory.page.ts';

Given('the user is on the Rozetka>Notebook page', async function (this: RozetkaWorld) {
    const notebookSubcategoryPage = new NotebooksSubcategoryPage(this.page);
    await notebookSubcategoryPage.open();
});
