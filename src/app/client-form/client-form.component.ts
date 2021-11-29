import { Component, OnInit } from '@angular/core';

import { Client } from '../client';
import { ClientService } from '../client.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  radioChoices: string[] =["Personel","Professional"];

  scopeRadioChoice: string = this.radioChoices[1];

  constructor(
    private clientService: ClientService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  add(name: string, description: string, scope: string, email: string, notes: string): void {
    this.clientService.addClient({name,description,scope,email,notes} as Client)
      .subscribe()
  }

  radioChangeHandler(event: any){
    if(event.target.value instanceof String){
      this.scopeRadioChoice = event.target.value;
    }
  }

}
