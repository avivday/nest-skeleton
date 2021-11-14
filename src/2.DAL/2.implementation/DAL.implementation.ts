import { Person } from 'src/1.Models/person';
import { IDAL } from 'src/2.DAL/1.interface/DAL.interface';

export class DAL implements IDAL {

    getPerson(): Person {
        return {
            firstName: "REAL",
            lastName: "DATA"
        }
    }

}