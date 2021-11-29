import { EventEmitter, Component, Input, OnInit, Output } from '@angular/core';
import { isSameDay } from 'date-fns';
import { Task } from 'src/app/types';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {
  @Input() calendarDays!: Array<Date>;
  @Input() tasks!: Array<Task>

  constructor() {
  }

  @Output() onRemoveItem = new EventEmitter<string>();

  removeItem(id: string): void {
    this.onRemoveItem.emit(id)
  }

  findTasksInDate(date: Date): Array<Task> {
    return this.tasks.filter(task => isSameDay(task.date, date))
  }

  ngOnInit() {
  }
}
