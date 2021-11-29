import { Component, OnInit } from '@angular/core';
import { addDays, previousSunday } from 'date-fns';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {

  constructor() { }

  get daysOfWeek() {
    let daysOfWeek: Array<Date> = [];
    const sunday = previousSunday(new Date());

    for (let i = 0; i <= 6; i++) {
      daysOfWeek = [...daysOfWeek, addDays(sunday, i)]
    }

    return daysOfWeek;
  }

  ngOnInit(): void {
  }

}
