import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {Customer} from '../model/customer.model';
import {environment} from '../../environments/environment';
import { Client } from '../model/credit.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customersUpdatedSubject = new BehaviorSubject<boolean>(false);
  public customersUpdated$ = this.customersUpdatedSubject.asObservable();

  constructor(private http:HttpClient) {

  }
  public getCustomers():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(`${environment.apiUrl}/customers`);
  }
  public searchCustomers(keyword:string):Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(`${environment.apiUrl}/customers/search?keyword=${keyword}`);
  }
  public saveCustomer(customer:Customer):Observable<Customer>{
    return this.http.post<Customer>(`${environment.apiUrl}/customers`,customer).pipe(
      tap(() => this.notifyCustomersChanged())
    );
  }
  public deleteCustomer(id:number):Observable<void>{
    return this.http.delete<void>(`${environment.apiUrl}/customers/${id}`).pipe(
      tap(() => this.notifyCustomersChanged())
    );
  }
  public getCustomer(id:number):Observable<Customer>{
    return this.http.get<Customer>(`${environment.apiUrl}/customers/${id}`);
  }
  private notifyCustomersChanged() {
    this.customersUpdatedSubject.next(true);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clientsUpdatedSubject = new BehaviorSubject<boolean>(false);
  public clientsUpdated$ = this.clientsUpdatedSubject.asObservable();

  constructor(private http: HttpClient) {}

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${environment.apiUrl}/clients`);
  }

  getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(`${environment.apiUrl}/clients/${id}`);
  }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${environment.apiUrl}/clients`, client).pipe(
      tap(() => this.notifyClientsChanged())
    );
  }

  updateClient(id: number, client: Client): Observable<Client> {
    return this.http.put<Client>(`${environment.apiUrl}/clients/${id}`, client).pipe(
      tap(() => this.notifyClientsChanged())
    );
  }

  deleteClient(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/clients/${id}`).pipe(
      tap(() => this.notifyClientsChanged())
    );
  }

  getClientCredits(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/clients/${id}/credits`);
  }

  private notifyClientsChanged() {
    this.clientsUpdatedSubject.next(true);
  }
}
