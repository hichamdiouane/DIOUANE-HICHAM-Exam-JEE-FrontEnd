import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Client, ClientType } from '../model/credit.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${environment.apiUrl}/clients`);
  }

  getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(`${environment.apiUrl}/clients/${id}`);
  }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${environment.apiUrl}/clients`, client);
  }

  updateClient(id: number, client: Client): Observable<Client> {
    return this.http.put<Client>(`${environment.apiUrl}/clients/${id}`, client);
  }

  deleteClient(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/clients/${id}`);
  }

  getClientsByType(type: ClientType): Observable<Client[]> {
    return this.http.get<Client[]>(`${environment.apiUrl}/clients/type/${type}`);
  }

  searchClients(query: string): Observable<Client[]> {
    return this.http.get<Client[]>(`${environment.apiUrl}/clients/search`, {
      params: { query }
    });
  }

  getClientCreditHistory(clientId: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/clients/${clientId}/credit-history`);
  }

  getClientRemboursementHistory(clientId: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/clients/${clientId}/remboursement-history`);
  }
} 