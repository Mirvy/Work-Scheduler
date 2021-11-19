import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskDetailComponent,
    ClientDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
