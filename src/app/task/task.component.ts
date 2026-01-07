import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";

@Component({
    selector: "app-task",
    imports: [],
    standalone: true,
    templateUrl: "./task.component.html",
    styleUrl: "./task.component.css"
})
export class TaskComponent {
    @Input() name?: string; 

}