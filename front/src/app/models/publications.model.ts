import { User } from './user.mode';

export class Publication{
    id!:String
    contenu!: String;
    type!: String;
    prix!: String;
    filename!: String;
    adresse!: String;
    author!: User;
 }