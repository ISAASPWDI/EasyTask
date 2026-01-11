import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../detailed-task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>()

  onCancel() {
    this,this.cancel.emit();
  }
}
