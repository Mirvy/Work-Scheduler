import { Component, OnInit } from '@angular/core';

import { TaskService } from '../task.service';
import { DateTimeService } from '../date-time.service';
import { Task } from '../task';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  tasks: Task[] = [];
  dailyTasks: Task[] = [];
  weeklyTasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    public dateTimeService: DateTimeService
  ) { }

  ngOnInit(): void {
    this.getTasks()
  }
  getTasks(): void{
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
        for(let i = 0; i < this.tasks.length; ++i){
          if(this.isToday(this.tasks[i].created)){
            this.dailyTasks.push(this.tasks[i]);
          }else if(this.isWithinAWeek(this.tasks[i].created)){
            this.weeklyTasks.push(this.tasks[i]);
          }
        }
      });
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
