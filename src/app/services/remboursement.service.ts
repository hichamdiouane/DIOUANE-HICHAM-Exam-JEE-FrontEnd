import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Remboursement, RemboursementType } from '../model/credit.model';

@Injectable({
  providedIn: 'root'
})
export class RemboursementService {
  constructor(private http: HttpClient) {}

  getAllRemboursements(): Observable<Remboursement[]> {
    return this.http.get<Remboursement[]>(`${environment.apiUrl}/remboursements`);
  }

  getRemboursementById(id: number): Observable<Remboursement> {
    return this.http.get<Remboursement>(`${environment.apiUrl}/remboursements/${id}`);
  }

  createRemboursement(creditId: number, remboursement: Remboursement): Observable<Remboursement> {
    return this.http.post<Remboursement>(`${environment.apiUrl}/credits/${creditId}/remboursements`, remboursement);
  }

  getRemboursementsByType(type: RemboursementType): Observable<Remboursement[]> {
    return this.http.get<Remboursement[]>(`${environment.apiUrl}/remboursements/type/${type}`);
  }

  getRemboursementsByCredit(creditId: number): Observable<Remboursement[]> {
    return this.http.get<Remboursement[]>(`${environment.apiUrl}/credits/${creditId}/remboursements`);
  }

  getRemboursementsByDateRange(startDate: string, endDate: string): Observable<Remboursement[]> {
    return this.http.get<Remboursement[]>(`${environment.apiUrl}/remboursements/date-range`, {
      params: { startDate, endDate }
    });
  }
} 