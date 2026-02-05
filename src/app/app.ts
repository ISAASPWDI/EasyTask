import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

import { DUMMY_USERS } from './dummy-users';


@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectUser?: string;
  newTask!: string;

  onSelectUser(id: string){
    console.log("hola : " + id);
    this.selectUser = id
  }
  get selectedUser(){
    return this.users.find((user) => user.id === this.selectUser);
  }
}
