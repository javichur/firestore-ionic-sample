import { IFilm } from './film.interface';

export interface IUser {
  email: string;
  name: string;
  films: IFilm[];
}
