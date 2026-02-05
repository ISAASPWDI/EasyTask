import { Component, inject, Input } from '@angular/core';
import { Task } from '../task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common'
import { TaskService } from '../task.service';


@Component({
  selector: 'app-detailed-task',
  standalone: false,
  templateUrl: './detailed-task.html',
  styleUrl: './detailed-task.css',
})
export class DetailedTask {
  @Input( { required: true } ) task!: Task;
  private taskService = inject(TaskService)

  onCompleteTask () {
    this.taskService.removeTask(this.task.id)
  }
}
