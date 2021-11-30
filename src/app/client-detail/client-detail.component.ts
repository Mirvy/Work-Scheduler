import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  client?: Client;

  radioChoices: string[] =["Personel","Professional"];

  scopeRadioChoice: string = this.radioChoices[this.radioChoices.length];

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.clientService.getClient(id)
      .subscribe(client => this.client = client);
  }

  save(name: string, description: string, email: string, scope: string, notes: string): void{
    if(this.client){
      this.client.name = name;
      this.client.description = description;
      this.client.email = email;
      this.client.scope = scope;
      this.clientService.updateClient(this.client)
        .subscribe()
    }
  }

  radioChangeHandler(event: any){
    if(event.target.value instanceof String){
      this.scopeRadioChoice = event.target.value;
    }
  }

}
