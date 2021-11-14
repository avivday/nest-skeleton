import { SecurityMock } from './../4.Security/3.mock/security.mock';
import { ISECURITY_TOKEN } from './../4.Security/1.interface/security.interface';
import { Security } from './../4.Security/2.implementation/security.implementation';
import { IDAL_TOKEN } from "src/2.DAL/1.interface/DAL.interface";
import { DAL } from "src/2.DAL/2.implementation/DAL.implementation";
import { DALMock } from "src/2.DAL/3.mock/DAL.mock";
import { IBL_TOKEN } from "src/3.BL/1.interface/BL.interface";
import { BL } from "src/3.BL/2.implementation/BL.implementation";

export const DAL_PROVIDER = {
    useClass: DAL,
    // useClass: DALMock,
    provide: IDAL_TOKEN
};

export const SECURITY_PROVIDER = {
    useClass: Security,
    // useClass: SecurityMock,      
    provide: ISECURITY_TOKEN
}

// add more layers here and mock them as you wish,

export const BL_PROVIDER = {
    useClass: BL,
    provide: IBL_TOKEN
}