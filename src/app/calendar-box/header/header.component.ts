import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getMonth, getYear } from 'date-fns';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() dateReference!: Date;
  @Output() onChangeMonth = new EventEmitter<number>();

  constructor() { }

  toPreviousMonth(): void {
    this.onChangeMonth.emit(-1)
  }

  toNextMonth(): void {
    this.onChangeMonth.emit(1)
  }

  ngOnInit(): void {
  }
}
