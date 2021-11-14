import { Exclude } from "class-transformer";

export class User {
    username: string;

    @Exclude()
    password: string;
}