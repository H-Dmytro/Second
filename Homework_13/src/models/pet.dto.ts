import { CategoryDto } from './category.dto';
export interface PetDto {
    find(arg0: (pet: unknown) => boolean): unknown;
    id: number;
    category: CategoryDto[];
    name: string;
    photoUrls: [],
    tags: [],
    status: string;
};
