import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';



@Component({
  selector: 'app-detailed-task',
  imports: [],
  templateUrl: './detailed-task.html',
  styleUrl: './detailed-task.css',
})
export class DetailedTask {
  @Input( { required: true } ) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask () {
    this.complete.emit(this.task.id)
  }
}
