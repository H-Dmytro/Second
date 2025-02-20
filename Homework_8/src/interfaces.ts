export interface Results {
    data: Data[];
    source: Source[];
    annotations: Annotations[];
}

interface Data {
    'ID Nation': string;
    Nation: string;
    'ID Year': number;
    Year: string;
    Population: number;
    'Slug Nation': string;
}

interface Annotations {
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
    substitutions: any[];
}

export async function getJson(): Promise<Results> {
    const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
    const json = await response.json() as Results;
    return json;
}

class ArithmeticAveragePopulation {
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

function allNationalId(data: Data[]): { ID: number; 'National ID': string }[] {
    return data.map((item, index) => ({
        ID: index + 1,
        'National ID': item['ID Nation']
    }));
}

(async () => {
    const results = await getJson();
    console.log(results.data[0]);
    const allNationalIds = allNationalId(results.data);
    console.log(allNationalIds);
    console.log(results.data[0]['ID Nation']);
    const averagePopulationCalculator = new ArithmeticAveragePopulation(results.data);
    console.log('Average population:', averagePopulationCalculator.averagePopulation);
})();
