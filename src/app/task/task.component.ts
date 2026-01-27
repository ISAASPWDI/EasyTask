import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DetailedTask } from "./detailed-task/detailed-task";
import { NewTask } from "./new-task/new-task";
import { NewTaskData } from "./task.model";
import { TaskService } from "./task.service";

@Component({
    selector: "app-task",
    imports: [DetailedTask, NewTask],
    standalone: true,
    templateUrl: "./task.component.html",
    styleUrl: "./task.component.css"
})
export class TaskComponent {
    @Input({ required: true }) userId!: string;
    @Input({ required: true }) name!: string;
    addingTask!: boolean;

    constructor(private taskService: TaskService){}

    onAddTask () {
        this.addingTask =  true; 
    }
    onCancel () {
        this.addingTask =  false; 
    }
    addTask(newData: NewTaskData) {
        this.taskService.addTask(newData, this.userId)
        this.addingTask = false;
    }

    get selectedUserTasks () {
        return this.taskService.getUserTasks(this.userId);
    }

    // onCompleteTask(id: string){
    //     this.taskService.removeTask(id);
    // }
}