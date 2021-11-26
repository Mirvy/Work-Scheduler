import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  date: Date = new Date;

  constructor() { }

  isToday(dateTimeStamp: string): Boolean {
    let d: Date = new Date(dateTimeStamp);
    return this.date.getDay() == d.getDay() 
      && this.date.getMonth() == d.getMonth()
      && this.date.getFullYear() == d.getFullYear();
  }

  isWithinAWeek(dateTimeStamp: string): Boolean {
    let d: Date = new Date(dateTimeStamp);
    return this.date.getFullYear() == d.getFullYear() 
      && this.date.getMonth() == d.getMonth()
      && Math.abs(this.date.getDate() - d.getDate()) < 7;
  }

  isThisMonth(dateTimeStamp: string): Boolean {
    let d: Date = new Date(dateTimeStamp);
    return this.date.getMonth() == d.getMonth();
  }

  isThisYear(dateTimeStamp: string): Boolean {
    let d: Date = new Date(dateTimeStamp);
    return this.date.getFullYear() == d.getFullYear();
  }
}
