import { Component, OnInit } from '@angular/core';

import { Task } from '../task';
//TODO: Replace mock task list with service request
import { TASKS } from '../mock-tasks';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task: Task | undefined;

  constructor() { }

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    this.task = TASKS[0];
  }

}
