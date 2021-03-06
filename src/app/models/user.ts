
import { Tag } from "./tag";

export class User {
    id: number;
    username:string;
    email: string;
    password: string;    
    first_name: string;
    last_name: string;
    avatar: ImageData|string;
    tags: Tag[];
}