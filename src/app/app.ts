import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  selectUser = this.users[0].id;

  onSelectUser(id: string){
    console.log("hola : " + id);
    this.selectUser = id
  }
  get selectedUser(){
    return this.users.find((user) => user.id === this.selectUser);
  }
}
