import { Module } from '@nestjs/common';
import { DAL_PROVIDER } from 'src/5.WebAPI/api.config';

@Module({
    providers: [DAL_PROVIDER],
    exports: [DAL_PROVIDER]
})

export class BLModule { }