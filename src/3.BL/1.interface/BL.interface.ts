import { Person } from 'src/1.models/person';

export const IBL_TOKEN = "BL INTERFACE";

export interface IBL {
    getPerson() : Person;
}