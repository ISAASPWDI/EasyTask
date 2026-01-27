import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task.model';
import { TaskService } from '../task.service';



@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input({ required: true }) userId!: string 
  private taskService = inject(TaskService);
  @Output() close = new EventEmitter<void>()
  enteredTitle = "";
  enteredSummary = "";
  enteredDate = "";

  onCancel() {
    this.close.emit();
  }
  onAddTask(){
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    this.close.emit();
  }
}
