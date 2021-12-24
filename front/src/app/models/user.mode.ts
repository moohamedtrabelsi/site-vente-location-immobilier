import { Publication } from './publications.model';

export class User {

    username!: String;
    firstname!: String;
    lastname!: String;
    email!: String;
    password!: String;
    favoris!: Publication[];
}