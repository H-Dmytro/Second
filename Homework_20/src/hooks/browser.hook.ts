import { AfterAll, BeforeAll } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { RozetkaWorld } from '../worlds/rozetka.world.ts';

export function browserHook():void {
    BeforeAll(async function() {
        RozetkaWorld.browser = await chromium.launch({ headless: false });
    });


    AfterAll(async function() {
        await RozetkaWorld.browser.close();
    });
}
