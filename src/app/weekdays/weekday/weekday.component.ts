import { Component, Input } from '@angular/core';
import { Weekday } from '../weekdays-list/weekdays-list.component';

@Component({
  selector: 'wd-weekday',
  templateUrl: './weekday.component.html',
  styleUrls: ['./weekday.component.css'],
})
export class WeekdayComponent {
  @Input({
    required: true,
  })
  public weekday!: Weekday;
}
