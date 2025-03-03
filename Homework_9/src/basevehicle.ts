interface Vehicle {
    speed: number;
    type: string;
    wheelCount: number;
    getSpeed(): number;
    getType(): string;
    getWheelCount(): number;
}

export abstract class BaseVehicle implements Vehicle {
    public speed: number;
    public type: string;
    public wheelCount: number;

    public constructor(speed: number, type: string, wheelCount: number) {
        this.speed = speed;
        this.type = type;
        this.wheelCount = wheelCount;
    }
    public getSpeed(): number {
        return this.speed;
    }

    public getType(): string {
        return this.type;
    }
    public getWheelCount(): number {
        return this.wheelCount;
    };
}
