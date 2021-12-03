import { Component, OnInit } from '@angular/core';

import { TaskService } from '../task.service';
import { Task } from '../task';
import { Client } from '../client';
import { ConfirmDialogService } from '../confirm-dialog.service';
import { ClientService } from '../client.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  searchString: string = "";
  id?: string;

  tasks: Task[] = [];
  clients: Client[] = [];

  constructor(
    private taskService: TaskService,
    private clientService: ClientService,
    private confirmDialogService: ConfirmDialogService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getTasks();
    this.getClients();
  }

  getTasks(): void{
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  getClients(): void {
    this.clientService.getClients()
      .subscribe(clients => this.clients = clients);
  }

  getClientName(id: number): string {
    return this.clients.filter(client => client.id == id)[0].name;
  }

  getUrgency(urgent: boolean): string {
    return urgent ? "yes" : "no";
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id)
      .subscribe(task => {this.tasks.splice(this.tasks.indexOf(task),1)})
  }

  public openConfirmDialog(task: Task) {
    this.confirmDialogService.confirm('Please confirm..', `Do you really want to delete ${task.description}?.`)
      .then((confirmed) => confirmed ? this.deleteTask(task.id as number): null)
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  //TODO - REMOVE THIS TEST OUTPUT CODE
  log(message: any): void {
    if(typeof message === "number"){
      message = message.toString()
    }
    this.messageService.add(`Tasks: ${typeof Object.keys(message)[0]}`);
  }
}
