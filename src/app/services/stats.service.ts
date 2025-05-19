import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }
  getDashboardStats(startDate: string, endDate: string): Observable<any> {
    const params = new HttpParams()
      .set('startDate', startDate)
      .set('endDate', endDate);
    return this.http.get(`${environment.apiUrl}/stats/operations`, { params });
  }
  getOperationsChartData(startDate: string, endDate: string): Observable<any> {
    const params = new HttpParams()
      .set('startDate', startDate)
      .set('endDate', endDate);
    return this.http.get(`${environment.apiUrl}/stats/operations-chart`, { params });
  }
  getAccountsByType(): Observable<{ [key: string]: number }> {
    return this.http.get<{ [key: string]: number }>(`${environment.apiUrl}/stats/accounts-by-type`);
  }
  getTotalCredits(): Observable<number> {
    return this.http.get<number>(`${environment.apiUrl}/stats/total-credits`);
  }
  getCreditsByStatus(): Observable<{ [key: string]: number }> {
    return this.http.get<{ [key: string]: number }>(`${environment.apiUrl}/stats/credits-by-status`);
  }
  getCreditsByType(): Observable<{ [key: string]: number }> {
    return this.http.get<{ [key: string]: number }>(`${environment.apiUrl}/stats/credits-by-type`);
  }
  getTotalRemboursements(): Observable<number> {
    return this.http.get<number>(`${environment.apiUrl}/stats/total-remboursements`);
  }
  getRemboursementsByType(): Observable<{ [key: string]: number }> {
    return this.http.get<{ [key: string]: number }>(`${environment.apiUrl}/stats/remboursements-by-type`);
  }
  getCreditsByClient(): Observable<{ [key: string]: number }> {
    return this.http.get<{ [key: string]: number }>(`${environment.apiUrl}/stats/credits-by-client`);
  }
}
