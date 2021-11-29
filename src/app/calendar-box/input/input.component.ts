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
    id: '',
    title: '',
    date: new Date(),
    description: '',
  }

  @Output() onPostTasks = new EventEmitter<Task>();

  submitTask: FormGroup;

  get title() {
    return this.submitTask.get('title')
  }

  get date() {
    return this.submitTask.get('date')
  }

  get description() {
    return this.submitTask.get('description')
  }

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

  openForm(form: HTMLElement, div: HTMLElement): void {
    form.classList.add("--is-open")
    div.classList.add("--is-open")
  }

  closeForm(form: HTMLElement, div: HTMLElement): void {
    form.classList.remove("--is-open")
    div.classList.remove("--is-open")
  }

  onSubmit(): void {
    const dateAdjusted = parseISO(this.date?.value)
    const taskId = (Math.random() * 20).toString()
    const task = { id: taskId, title: this.title?.value, date: dateAdjusted, description: this.description?.value }
    this.onPostTasks.emit(task)
  }

  resetForm(): void {
    this.submitTask
  }

  ngOnInit(): void {
  }

}
