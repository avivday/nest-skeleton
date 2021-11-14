import { Person } from 'src/1.models/person';

export const IDAL_TOKEN = "DAL INTERFACE";

export interface IDAL {
    getPerson() : Person;
}