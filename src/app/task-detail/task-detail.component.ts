import { Component, OnInit } from '@angular/core';

import { Task } from '../task';
import { TaskService } from '../task.service';
//TODO: Replace mock task list with service request
//import { TASKS } from '../mock-tasks';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task: Task | undefined;

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    //TODO: Use the new taskService to receive the current task
    //this.task = null;
  }

}
