import { IDAL_TOKEN } from './../../2.DAL/1.interface/DAL.interface';
import { IDAL } from 'src/2.DAL/1.interface/DAL.interface';
import { Person } from 'src/1.Models/person';
import { IBL } from 'src/3.BL/1.interface/BL.interface';
import { Inject } from '@nestjs/common';

export class BL implements IBL {

    constructor(@Inject(IDAL_TOKEN) private _DAL: IDAL) {}
    getPerson(): Person {
        return this._DAL.getPerson();
    }

}