import { Component, OnInit } from '@angular/core';

import { Client } from '../client';
import { ClientService } from '../client.service';
import { ConfirmDialogService } from '../confirm-dialog.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  
  scope?: string = "";
  country?: string = "";

  countries: string[] = ['Korea', 'Japan', 'USA', 'London', 'Philippines', 'Thailand'];

  clients: Client[] = [];
  
  constructor(
    private clientService: ClientService,
    private confirmDialogService: ConfirmDialogService
  ) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.clientService.getClients()
      .subscribe(clients => this.clients = clients);
  }

  deleteClient(id: number): void {
    this.clientService.deleteClient(id)
      .subscribe(client => {this.clients.splice(this.clients.indexOf(client),1)})
  }

  public openConfirmDialog(client: Client) {
    this.confirmDialogService.confirm('Please confirm..', `Do you really want to delete ${client.name}?. Doing so will remove all associated tasks!`)
      .then((confirmed) => confirmed ? this.deleteClient(client.id as number): null)
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

}
