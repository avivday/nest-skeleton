import { User } from './../../1.Models/user';

export const ISECURITY_TOKEN = "SECURITY INTERFACE";

export interface ISecurity {
    testSecurity() : User;
}