import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { Client } from './client';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clientsUrl = 'http://localhost:8080/api/clients'

  httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsUrl)
      .pipe(
        tap(_ => this.log('fetched clients')),
        catchError(this.handleError<Client[]>('getClients',[]))
      );
  }

  getClient(id: Number): Observable<Client> {
    const url = `${this.clientsUrl}/${id}`;
    return this.http.get<Client>(url)
      .pipe(
        tap(_ => this.log(`fetched client id=${id}`)),
        catchError(this.handleError<Client>(`getClient id=${id}`))
      );
  }

  updateClient(client: Client): Observable<any> {
    let url =  this.clientsUrl + `/${client.id}`;
    return this.http.put(url,client, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated client id=${client.id}`)),
        catchError(this.handleError<any>('updateClient'))
      );
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.clientsUrl, client, this.httpOptions)
      .pipe(
        tap((newClient: Client) => this.log(`added Client w/ id$={newClient.id}`)),
        catchError(this.handleError<Client>('addClient'))
      );
  }

  deleteClient(id: Number): Observable<Client> {
    const url = `${this.clientsUrl}/${id}`;
    return this.http.delete<Client>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`deleted client id=${id}`)),
        catchError(this.handleError<Client>('deleteClient'))
      );
  }

  searchClient(term: string): Observable<Client[]> {
    if (!term.trim()){
      return of([]);
    }
    return this.http.get<Client[]>(`${this.clientsUrl}?name=${term}`)
      .pipe(
        tap(x => x.length ?
          this.log(`found clients matching "${term}"`) :
          this.log(`no heroes matching "${term}"`)),
        catchError(this.handleError<Client[]>('searchClients',[]))
      );
  }

  private log(message: string): void {
    this.messageService.add(`ClientService: ${message}`);
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
