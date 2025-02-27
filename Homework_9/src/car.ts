import { BaseVehicle } from './basevehicle';

export class Car extends BaseVehicle {
    public constructor(private brand: string, speed: number) {
        super(speed, 'Car', 4);
    }
    public getBrand(): string {
        return this.brand;
    }
}
