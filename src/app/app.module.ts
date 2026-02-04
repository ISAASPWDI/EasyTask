import { NgModule } from '@angular/core';
import { AppComponent } from './app';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { CardComponent } from './shared/card/card.component';
import { BrowserModule } from '@angular/platform-browser';
import { DetailedTask } from './task/detailed-task/detailed-task';
import { NewTask } from './task/new-task/new-task';
import { FormsModule } from '@angular/forms';

@NgModule({
    // non-Standalone components
    declarations: [AppComponent, HeaderComponent, UserComponent, CardComponent, TaskComponent, DetailedTask, NewTask],
    bootstrap: [AppComponent],
    // Standalone components
    imports: [BrowserModule, FormsModule]
})
export class AppModule { }