import { Car } from './car';
import { Motorcycle } from './motorcycle';
import { BaseVehicle } from './basevehicle';

function printVehicleInfo(vehicle: BaseVehicle): void {
    console.log(`Type: ${vehicle.getType()}, Speed: ${vehicle.getSpeed()} km/h, Wheel Count: ${vehicle.getWheelCount()}`);
}

const car = new Car('KIA', 120);
const motorcycle = new Motorcycle('Yawa', 80);


printVehicleInfo(car);
printVehicleInfo(motorcycle);
