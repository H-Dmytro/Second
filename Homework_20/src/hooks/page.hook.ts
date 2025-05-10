import { After, Before } from '@cucumber/cucumber';
import { RozetkaWorld } from '../worlds/rozetka.world.ts';

export function pageHook(): void {
    Before(async function(this: RozetkaWorld) {
        this.page = await this.context.newPage();
    });

    After(async function(this: RozetkaWorld) {
        await this.page.close();
    });
}
