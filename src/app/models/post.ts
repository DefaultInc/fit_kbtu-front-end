import { IComment } from "./comment";
import { User } from './user';
import { Like } from './like';

export class Post {
  id: number;
  title: string;
  short_description: string;
  content: string;
  publish_date: string;
  author: User;
  comments: IComment[];
  isLiked: boolean;
  likes: Like[];
}