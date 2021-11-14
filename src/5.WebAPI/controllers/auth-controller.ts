import { ISecurity } from 'src/4.Security/1.interface/security.interface';
import { ISECURITY_TOKEN } from './../../4.Security/1.interface/security.interface';

import { Controller, Get, Inject } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    constructor(@Inject(ISECURITY_TOKEN) private _security: ISecurity) { }

    @Get('test')
    testSecurity() {
        return this._security.testSecurity();
    }
}