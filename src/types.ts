
export interface ICommuntity {
  _id: string;
  name: string;
  description: string;
  image: string;
  isPublic: boolean;
  createdAt: string;
  posts?: unknown[]
  members? : unknown[]
}