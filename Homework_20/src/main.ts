import { setDefaultTimeout, setWorldConstructor } from '@cucumber/cucumber';
import { RozetkaWorld } from './worlds/rozetka.world.ts';

setDefaultTimeout(999999999);
setWorldConstructor(RozetkaWorld);
