import { Component, OnInit } from '@angular/core';
import { addDays, addMonths, differenceInCalendarDays, getDate, getMonth, getYear, isSameDay, isSaturday, isSunday, lastDayOfMonth, nextSaturday, previousSunday, setDate } from 'date-fns';
import { Task } from '../types';

@Component({
  selector: 'app-calendar-box',
  templateUrl: './calendar-box.component.html',
  styleUrls: ['./calendar-box.component.css']
})
export class CalendarBoxComponent implements OnInit {

  dateReference: Date = new Date();
  calendarDates: Array<Date> = [];
  tasks: Array<Task> = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks") || '').map((task: any) => ({ ...task, date: new Date(task.date) })) : [];

  constructor() {
  }

  setCalendarDates(date: Date): void {
    this.calendarDates = [];

    let firstDayMonth: Date = setDate(date, 1)
    let firstDayCalendar: Date;
    let lastDayMonth: Date = lastDayOfMonth(date)
    let lastDayCalendar: Date;

    if (!isSunday(firstDayMonth)) {
      firstDayCalendar = previousSunday(firstDayMonth);
    }
    else {
      firstDayCalendar = firstDayMonth;
    }

    if (!isSaturday(lastDayMonth)) {
      lastDayCalendar = nextSaturday(lastDayMonth)
    }
    else {
      lastDayCalendar = lastDayMonth;
    }

    const daysBetween: number = differenceInCalendarDays(lastDayCalendar, firstDayCalendar)

    for (let i = 0; i <= daysBetween; i++) {
      this.calendarDates = [...this.calendarDates, addDays(firstDayCalendar, i)]
    }
  }

  changeMonth(amount: number): void {
    this.dateReference = addMonths(this.dateReference, amount)
    this.setCalendarDates(this.dateReference)
  }

  findTasksOfDate(date: Date): Array<Task> {
    const tasksOfDate = this.tasks.filter(task => isSameDay(date, task.date))
    return tasksOfDate
  }

  removeItem(id: string): void {
    console.log(id);
    this.tasks = this.tasks.filter(task => task.title !== id)
    this.saveToLocalStorage();
  }

  postTasks(task: Task): void {
    this.tasks = [...this.tasks, task]
    this.saveToLocalStorage()
  }

  saveToLocalStorage(): void {
    localStorage.setItem("tasks", JSON.stringify(this.tasks))
  }

  ngOnInit(): void {
    this.setCalendarDates(this.dateReference)
    console.log(this.tasks)
  }

}
