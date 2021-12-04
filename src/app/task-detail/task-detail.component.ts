import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { Task } from '../task';
import { TaskService } from '../task.service';
import { DateTimeService } from '../date-time.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task?: Task;
  urgent: boolean = false;
  dueDate: NgbDateStruct = this.dateTimeService.getNgbPlaceholder();

  constructor(
    private taskService: TaskService,
    private messageService: MessageService,
    private dateTimeService: DateTimeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getTask();
    this.setCheckBox();
  }

  getTask(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getTask(id)
      .subscribe(task => {
        this.task = task;
        let d = new Date(task.due);
        this.dueDate = {
          year:d.getFullYear(),
          // The addition of one is to account for an adjustment
          // that is necessary when converting NgbDateStruct to
          // ISO 8601 string, date format.
          month: d.getMonth() + 1,
          day:d.getDate()
        }});
  }

  save(description: string, body: string, urgent: boolean, dueNgb: NgbDateStruct): void{
    if(this.task){
      this.log(`${urgent}`)
      let due = this.dateTimeService.convertNgbToISO(dueNgb);
      this.task.description = description;
      this.task.body = body;
      this.task.urgent = urgent;
      this.task.due = due;
      this.taskService.updateTask(this.task)
        .subscribe()
    }
  }

  checkBoxChanged(event: any){
    this.log(`${this.urgent}`);
    
  }

  setCheckBox(): void{
    if(this.task){
      this.task.urgent = this.task.urgent;
    }
  }

  log(message: string): void {
    this.messageService.add(`task-detail: ${message}`);
  }

}
