import { Component, Input, OnInit } from '@angular/core';
import { DateTimeService } from '../date-time.service';

import { Task } from '../task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  @Input() task?: Task;

  constructor(
    private dateTimeService: DateTimeService
  ) { }

  ngOnInit(): void {
  }

  isPastDue(dateTimeStamp: string): Boolean {
    return this.dateTimeService.isPastDue(dateTimeStamp);
  }

}
