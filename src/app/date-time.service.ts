import { Injectable } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  date: Date = new Date;

  constructor(
    private messageService: MessageService
  ) { }

  isToday(dateTimeStamp: string): Boolean {
    // 86400000 == number of milliseconds per 1 day
    let today: Date = new Date();
    let d: Date = new Date(dateTimeStamp);
    return Math.abs(Date.parse(d.toString()) - Date.now()) <  86400000
      && today.getDay() == d.getDay();
  }

  isWithinAWeek(dateTimeStamp: string): Boolean {
    // 604800000 == number of milliseconds per 1 week
    let today: Date = new Date();
    let d: Date = new Date(dateTimeStamp);
    return  Math.abs(Date.parse(d.toString()) - Date.now()) < 604800000
      && Date.parse(d.toString()) > Date.now();
  }

  isThisMonth(dateTimeStamp: string): Boolean {
    let today: Date = new Date();
    let d: Date = new Date(dateTimeStamp);
    return today.getFullYear() == d.getFullYear()
      && today.getMonth() == d.getMonth();
  }

  isThisYear(dateTimeStamp: string): Boolean {
    let today: Date = new Date();
    let d: Date = new Date(dateTimeStamp);
    return today.getFullYear() == d.getFullYear();
  }

  isPastDue(dateTimeStamp: string): Boolean {
    let today: Date = new Date();
    let d: Date = new Date(dateTimeStamp);
    return Date.now() > Date.parse(d.toString())
      && today.getFullYear() == d.getFullYear()
      && today.getDay() != d.getDay();
  }

  convertNgbToISO(date: NgbDateStruct): string {
    let d = new Date(date.year,date.month - 1, date.day);
    return d.toISOString();
  }

  getNgbPlaceholder(): NgbDateStruct {
    let d = new Date();
    return {
      year: d.getFullYear(),
      month: d.getMonth(),
      day: d.getDay()
    } as NgbDateStruct;
  }

  log(message: any): void {
    this.messageService.add(`dateService: ${message}`);
  }
}
