import { DAL } from './2.implementation/DAL.implementation';
import { Module } from '@nestjs/common';
import { IDAL_TOKEN } from './1.interface/DAL.interface';


@Module({
    providers: [],
    exports: [IDAL_TOKEN]
})
export class DALModule { }