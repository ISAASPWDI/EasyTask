import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DetailedTask } from "./detailed-task/detailed-task";
import { NewTask } from "./new-task/new-task";
import { NewTaskData } from "./task.model";

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
    onAddTask () {
        this.addingTask =  true; 
    }
    onCancel () {
        this.addingTask =  false; 
    }
    addTask(newData: NewTaskData) {
        const taskId = this.detailed_tasks[this.detailed_tasks.length - 1].id;
        this.detailed_tasks.push({
            id: "t" +  ( Number(taskId.split("t")[1]) + 1 ),
            userId: this.userId,
            title: newData.title,
            summary: newData.summary,
            dueDate: newData.date
        });
        this.addingTask = false;
        console.log(this.detailed_tasks);
        
    }

    detailed_tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary:
                'Learn all the basic and advanced features of Angular & how to apply them.',
            dueDate: '2025-12-31',
        },
        {
            id: 't2',
            userId: 'u3',
            title: 'Build first prototype',
            summary: 'Build a first prototype of the online shop website',
            dueDate: '2024-05-31',
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue template',
            summary:
                'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
        },
    ]

    get selectedUserTasks () {
        return this.detailed_tasks.filter((detail_task) => detail_task.userId === this.userId )
    }

    onCompleteTask(id: string){
        this.detailed_tasks = this.detailed_tasks.filter((detail_task) => detail_task.id !== id)
    }
}