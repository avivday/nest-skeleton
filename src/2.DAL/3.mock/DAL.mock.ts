import { Person } from 'src/1.models/person';
import { IDAL } from 'src/2.DAL/1.interface/DAL.interface';

export class DALMock implements IDAL {

    getPerson(): Person {
        return {
            firstName: "MOCK",
            lastName: "WORKED"
        }
    }

}