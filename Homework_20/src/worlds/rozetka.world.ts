import { IWorldOptions, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from 'playwright';
import { NotebooksSubcategoryPage } from '../pages/rozetka/notebooks.subcategory.page.ts';

export class RozetkaWorld extends World {
    public static globalContext: Map<string, unknown> = new Map<string, unknown> ();
    public scenarioContext: Map<string, unknown>;
    public static browser: Browser;
    public context: BrowserContext;
    public page: Page;
    public get browser(): Browser {
        return RozetkaWorld.browser;
    }
    public get globalContext(): Map<string, unknown> {
        return RozetkaWorld.globalContext;
    }
    public get notebookSubcategoryPage(): NotebooksSubcategoryPage {
        if (!this._rozetkaNotebookPage) {
            this._rozetkaNotebookPage = new NotebooksSubcategoryPage(this.page);
        }
        return this._rozetkaNotebookPage;
    }
    private _rozetkaNotebookPage: NotebooksSubcategoryPage;
    public constructor(options: IWorldOptions) {
        super(options);
        this.scenarioContext = new Map<string, unknown>();
    }
}
