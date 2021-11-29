import { Component, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/types';
import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { parseISO } from 'date-fns';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  task: Task = {
    title: '',
    date: new Date(),
    description: '',
  }

  @Output() onPostTasks = new EventEmitter<Task>();

  submitTask: FormGroup;

  constructor() {
    this.submitTask = new FormGroup({
      'title': new FormControl(this.task.title,
        [Validators.required]),
      'date': new FormControl(this.task.date,
        [Validators.required]),
      'description': new FormControl(this.task.description,
        [Validators.required]),
    })
  }

  get title() {
    return this.submitTask.get('title')
  }

  get date() {
    return this.submitTask.get('date')
  }

  get description() {
    return this.submitTask.get('description')
  }

  onSubmit() {
    const dateAdjusted = parseISO(this.date?.value)
    const task = { title: this.title?.value, date: dateAdjusted, description: this.description?.value }
    this.onPostTasks.emit(task)
  }



  // sendTask(title: string, date: string, description: string): void {
  //   const dateTypeDate = new Date(date);
  //   const dateAdjusted = new Date(dateTypeDate.valueOf() + dateTypeDate.getTimezoneOffset() * 60 * 1000);
  //   const task = { title: title, date: dateAdjusted, description: description }
  //   this.onAddTask.emit(task)
  // }

  getTasks(): Array<Task> {
    return localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks") || '').map((task: any) => ({ ...task, date: new Date(task.date) })) : [];
  }

  ngOnInit(): void {
  }

}
