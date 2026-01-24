import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-detailed-task',
  imports: [CardComponent, DatePipe],
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
