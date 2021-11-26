import { Component, OnInit } from '@angular/core';

import { TaskService } from '../task.service';
import { DateTimeService } from '../date-time.service';
import { Task } from '../task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    public dateTimeService: DateTimeService
  ) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void{
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  isToday(dateTimeStamp: string): Boolean {
    return this.dateTimeService.isToday(dateTimeStamp);
  }

  isWithinAWeek(dateTimeStamp: string): Boolean {
    return this.dateTimeService.isWithinAWeek(dateTimeStamp);
  }

  isThisMonth(dateTimeStamp: string): Boolean {
    return this.dateTimeService.isThisMonth(dateTimeStamp);
  }

  isThisYear(dateTimeStamp: string): Boolean {
    return this.dateTimeService.isThisYear(dateTimeStamp);
  }

}
