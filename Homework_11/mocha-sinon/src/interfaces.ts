export interface Results {
    results: string;
    data: Data[];
    source: Source[];
    annotations: Annotations[];
}

export interface Data {
    results: string;
    'ID Nation': string;
    Nation: string;
    'ID Year': number;
    Year: string;
    Population: number;
    'Slug Nation': string;
}

export interface Annotations {
    source_name: string;
    source_description: string;
    dataset_name: string;
    dataset_link: string;
    table_id: string;
    topic: string;
    subtopic: string;
}

interface Source {
    measures: string[];
    annotations: Annotations;
    name: string;
    substitutions: string[];
}

export class ArithmeticAveragePopulation {
    private data: Data[];
    public averagePopulation: number;

    public constructor(data: Data[]) {
        this.data = data;
        this.averagePopulation = this.calculateAveragePopulation();
    }

    private calculateAveragePopulation(): number {
        if (this.data.length === 0) return 0;

        const totalPopulation = this.data.reduce((sum, item) => {
            return sum + item.Population;
        }, 0);

        return totalPopulation / this.data.length;
    }
}

export function allNationalId(data: Data[]): { ID: number; 'National ID': string }[] {
    return data.map((item, index) => ({
        ID: index + 1,
        'National ID': item['ID Nation']
    }));
};
