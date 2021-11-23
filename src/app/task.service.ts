import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { Task } from './task';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksUrl = 'api/tasks';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl)
      .pipe(
        tap(_ => this.log('fetched tasks')),
        catchError(this.handleError<Task[]>('getTasks',[]))
      )
  }

  getTask(id: Number): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<Task>(url)
      .pipe(
        tap(_ => this.log(`fetched task id=${id}`)),
        catchError(this.handleError<Task>(`getTask id=${id}`))
      )
  }

  updateTask(task: Task): Observable<any> {
    return this.http.put(this.tasksUrl,task, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated task id=${task.id}`)),
        catchError(this.handleError<any>('updateTask'))
      )
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, this.httpOptions)
      .pipe(
        tap((newTask: Task) => this.log(`added Task w/ id$={newHTask.id}`)),
        catchError(this.handleError<Task>('addTask'))
      )
  }

  deleteTask(id: Number): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.delete<Task>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`deleted task id=${id}`)),
        catchError(this.handleError<Task>('deleteTask'))
      )
  }

  searchTask(term: string): Observable<Task[]> {
    if (!term.trim()){
      return of([]);
    }
    return this.http.get<Task[]>(`${this.tasksUrl}?name=${term}`)
      .pipe(
        tap(x => x.length ?
          this.log(`found tasks matching "${term}"`) :
          this.log(`no heroes matching "${term}"`)),
        catchError(this.handleError<Task[]>('searchTasks',[]))
      )
  }

  private log(message: string): void {
    this.messageService.add(`TaskService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {

      //TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      //TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result
      return of(result as T);
    }
  }
}
