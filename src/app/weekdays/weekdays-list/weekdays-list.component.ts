import { Component, OnInit } from '@angular/core';

export interface Weekday {
  name: string;
  isCurrentDay: boolean;
}

@Component({
  selector: 'wd-weekdays-list',
  templateUrl: './weekdays-list.component.html',
  styleUrls: ['./weekdays-list.component.css'],
})
export class WeekdaysListComponent implements OnInit {
  public weekdays: Weekday[] = [];

  ngOnInit(): void {
    this.weekdays = [
      { name: 'Monday', isCurrentDay: false },
      { name: 'Tuesday', isCurrentDay: false },
      { name: 'Wednesday', isCurrentDay: false },
      { name: 'Thursday', isCurrentDay: false },
      { name: 'Friday', isCurrentDay: false },
      { name: 'Saturday', isCurrentDay: false },
      { name: 'Sunday', isCurrentDay: false },
    ];
  }
}
