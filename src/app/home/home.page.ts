import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { IUser } from '../interfaces/user.interface';
import { IFilm } from '../interfaces/film.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  userId = 'XXXXXXXXXXXXXXXX'; // for demo purpose

  name = '';
  email = '';
  films = [];

  unsubscribeUser = null;
  unsubscribeFilms = null;

  constructor(private fireStore: AngularFirestore) {}

  ngOnInit() {
    this.unsubscribeUser = this.fireStore.collection('users').doc(this.userId).valueChanges().subscribe({
      next: (user: IUser) => {
        console.log('User modificado: ' + JSON.stringify(user));
        this.name = user.name;
        this.email = user.email;
      },
      error: () => { console.log('Error'); },
      complete: () => { console.log('Complete'); }
    });

    this.unsubscribeFilms = this.fireStore.collection(`users/${this.userId}/films`).valueChanges().subscribe({
      next: (films: IFilm[]) => {
        console.log('Films modificados: ' + JSON.stringify(films));
        this.films = films;
      },
      error: () => { console.log('Error'); },
      complete: () => { console.log('Complete'); }
    });
  }

}
