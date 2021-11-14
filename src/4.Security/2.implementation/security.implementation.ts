import { User } from 'src/1.Models/user';
import { ISecurity } from 'src/4.Security/1.interface/security.interface';

export class Security implements ISecurity {

    testSecurity(): User {
        // do your thing
        return {
            username: "realuser",
            password: "realpassword"
        }
    }

}