import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TasksComponent } from './tasks/tasks.component';
import { ClientsComponent } from './clients/clients.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskCardComponent } from './task-card/task-card.component';
import { TableFilterPipe } from './table-filter.pipe';
import { TableSearchPipe } from './table-search.pipe';
import { ClientFormComponent } from './client-form/client-form.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { TaskFormComponent } from './task-form/task-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskDetailComponent,
    ClientDetailComponent,
    DashboardComponent,
    CalendarComponent,
    TasksComponent,
    ClientsComponent,
    MessagesComponent,
    TaskCardComponent,
    TableFilterPipe,
    TableSearchPipe,
    ClientFormComponent,
    ConfirmDialogComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
