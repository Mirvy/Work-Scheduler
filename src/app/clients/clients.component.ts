import { Component, OnInit } from '@angular/core';
import { Client } from '../client';

import { ClientService } from '../client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  
  gender?: string = "";
  country?: string = "";

  countries: string[] = ['Korea', 'Japan', 'USA', 'London', 'Philippines', 'Thailand'];

  clients: Client[] = [];
  
  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.clientService.getClients()
      .subscribe(clients => {this.clients = clients});
  }



}
