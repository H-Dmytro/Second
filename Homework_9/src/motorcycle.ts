import { BaseVehicle } from './basevehicle';

export class Motorcycle extends BaseVehicle {
    public constructor(private model: string, speed: number) {
        super(speed, 'Motorcycle', 2);
    }

    public getModel(): string {
        return this.model;
    }
}
