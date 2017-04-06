import { User } from "./user";

export interface IComment {
    id?: number;
    author: User;
    publish_date: string;
    content: string;
