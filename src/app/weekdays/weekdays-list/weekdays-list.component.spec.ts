import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekdaysListComponent } from './weekdays-list.component';

describe('WeekdaysListComponent', () => {
  let component: WeekdaysListComponent;
  let fixture: ComponentFixture<WeekdaysListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeekdaysListComponent]
    });
    fixture = TestBed.createComponent(WeekdaysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
