import { BeforeAll } from '@cucumber/cucumber';
import { RozetkaWorld } from '../worlds/rozetka.world.ts';

export function globalContextHook(): void {
    BeforeAll(async function() {
        RozetkaWorld.globalContext = new Map();
    });
}
