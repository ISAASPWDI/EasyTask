
import { Injectable } from "@angular/core";
import { NewTaskData } from "./task.model";

@Injectable({ providedIn: 'root' })
export class TaskService {
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

    constructor() {
        const tasks = localStorage.getItem("tasks");
        if ( tasks ) {
            this.detailed_tasks = JSON.parse(tasks); 
        }
    }

    getUserTasks(userId: string){
        return this.detailed_tasks.filter((detail_task) => detail_task.userId === userId )
    }

    addTask(newData: NewTaskData, userId: string){
        const taskId = this.detailed_tasks[this.detailed_tasks.length - 1].id;
        this.detailed_tasks.push({
            id: "t" +  ( Number(taskId.split("t")[1]) + 1 ),
            userId: userId,
            title: newData.title,
            summary: newData.summary,
            dueDate: newData.date
        });
        this.saveTask();
    }
    removeTask(id: string){
        this.detailed_tasks = this.detailed_tasks.filter((detail_task) => detail_task.id !== id)
        this.saveTask();
    }
    private saveTask () {
        localStorage.setItem("tasks", JSON.stringify(this.detailed_tasks));
    }
}