import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  
  gender?: string = "";
  country?: string = "";

  countries: string[] = ['Korea', 'Japan', 'USA', 'London', 'Philippines', 'Thailand'];
  
  users: any[] = [
    { name: 'Kristy', gender: 'female', country: 'Korea' },
    { name: 'Nick', gender: 'male', country: 'Japan' },
    { name: 'Ariana', gender: 'female', country: 'USA' },
    { name: 'Joe', gender: 'male', country: 'London' },
    { name: 'Albert', gender: 'male', country: 'Philippines' },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
