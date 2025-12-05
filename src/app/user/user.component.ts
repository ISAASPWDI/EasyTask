import { Component, computed, signal } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";

const getRandomUser = Math.floor(Math.random() * DUMMY_USERS.length);


@Component({
    selector: "app-user",
    standalone: true,
    templateUrl: "./user.component.html",
    styleUrl: "./user.component.css"
})
export class UserComponent {
    randomUser = signal(DUMMY_USERS[getRandomUser])

    // get imagePath () {
    //     return "/assets/users/" + this.randomUser.avatar; 
    // }
    imagePath = computed(() => "assets/users/" + this.randomUser().avatar)
    name = computed(() => this.randomUser().name)
    
    onSelectUser () {
        const getRandomUser = Math.floor(Math.random() * DUMMY_USERS.length);
        this.randomUser.set(DUMMY_USERS[getRandomUser])
    }
}