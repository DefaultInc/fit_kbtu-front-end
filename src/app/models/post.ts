import { IComment } from "./comment";
import { User } from './user'

export class Post {
  id: number;
  title: string;
  short_description: string;
  content: string;
  publish_date: string;
  author: User;
  comments: IComment[];
}