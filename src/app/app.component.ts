import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links =[
    {title: 'Dashboard', fragment: "dashboard"},
    {title: 'Calendar',  fragment: "calendar"},
    {title: 'Tasks',     fragment: "tasks"},
    {title: 'Clients',   fragment: "clients"}
  ]

  constructor(public route: ActivatedRoute) { }
}
