import { Car } from './car';
import { Motorcycle } from './motorcycle';

const car = new Car('KIA', 120);
const motorcycle = new Motorcycle('Yawa', 80);

console.log(`Type: ${car.getType()}, Speed: ${car.getSpeed()} km/h, Brand: ${car.getBrand()}, Wheel Count: ${car.getWheelCount()}`);
console.log(`Type: ${motorcycle.getType()}, Speed: ${motorcycle.getSpeed()} km/h, Model: ${motorcycle.getModel()}, Wheel Count: ${motorcycle.getWheelCount()}`);
