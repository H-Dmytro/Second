export abstract class Employee {
    public name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public display(): void {
        console.log(`Employee name: ${this.name}`);
    }

    public abstract find(name: string): Manager;
}

export class Manager extends Employee {
    public constructor(name: string) {
        super(name);
        console.log(`Manager created with name: ${this.name}`);
    }

    public find(name: string): Manager {
        console.log(`Finding employee with name: ${name}`);
        return new Manager(name);
    }
};
