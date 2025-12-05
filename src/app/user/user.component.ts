import { Component } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";

const getRandomUser = Math.floor(Math.random() * DUMMY_USERS.length);


@Component({
    selector: "app-user",
    standalone: true,
    templateUrl: "./user.component.html",
    styleUrl: "./user.component.css"
})
export class UserComponent {
    randomUser = DUMMY_USERS[getRandomUser]

    get imagePath () {
        return "/assets/users/" + this.randomUser.avatar; 
    }
    onSelectUser () {
        const getRandomUser = Math.floor(Math.random() * DUMMY_USERS.length);
        this.randomUser = DUMMY_USERS[getRandomUser]
    }
}