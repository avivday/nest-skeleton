import { User } from 'src/1.Models/user';
import { ISecurity } from 'src/4.Security/1.interface/security.interface';

export class SecurityMock implements ISecurity {

    testSecurity(): User {
        return {
            username: "mockuser",
            password: "0000"
        }
    }

}