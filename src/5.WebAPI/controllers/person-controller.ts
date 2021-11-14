import { IBL, IBL_TOKEN } from '../../3.BL/1.interface/BL.interface';

import { Controller, Get, Inject } from '@nestjs/common';
import { Person } from 'src/1.Models/person';

@Controller('person')
export class PersonController {

    constructor(@Inject(IBL_TOKEN) private _BL: IBL) { }

    @Get()
    getPerson(): Person {
        return this._BL.getPerson();
    }
}