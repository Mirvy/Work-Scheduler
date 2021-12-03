import { Component, OnInit } from '@angular/core';
import { NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { Task } from '../task';
import { Client } from '../client';
import { TaskService } from '../task.service';
import { ClientService } from '../client.service';
import { MessageService } from '../message.service';
import { DateTimeService } from '../date-time.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  clients?: Client[];
  selectedId: string = "";
  dueDate: NgbDateStruct = this.dateTimeService.getNgbPlaceholder();
  urgent: boolean = false;

  constructor(
    private taskService: TaskService,
    private clientService: ClientService,
    private dateTimeService: DateTimeService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.clientService.getClients()
      .subscribe(clients => this.clients = clients);
  }

  add(description: string, body: string, urgent: boolean, dueNgb: NgbDateStruct, client: string): void {
    let u: string;
    if(urgent){
      u = "true";
    }else{
      u = "false";
    }
    let due = this.dateTimeService.convertNgbToISO(dueNgb);
    this.taskService.addTask({description,body,u,due,client}as unknown as Task)
      .subscribe()
  }

  checkBoxChanged(event: any){
    this.urgent = event.checked;
  }

  log(message: any): void {
    this.messageService.add(`task-form: ${message}`);
  }

}
