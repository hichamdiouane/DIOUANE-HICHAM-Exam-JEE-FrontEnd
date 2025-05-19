import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { 
  Credit, 
  CreditPersonnel, 
  CreditImmobilier, 
  CreditProfessionnel, 
  Remboursement,
  CreditStatus,
  CreditType
} from '../model/credit.model';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  constructor(private http: HttpClient) {}

  // Credit operations
  getAllCredits(): Observable<Credit[]> {
    return this.http.get<Credit[]>(`${environment.apiUrl}/credits`);
  }

  getCreditById(id: number): Observable<Credit> {
    return this.http.get<Credit>(`${environment.apiUrl}/credits/${id}`);
  }

  createCredit(credit: Credit): Observable<Credit> {
    return this.http.post<Credit>(`${environment.apiUrl}/credits`, credit);
  }

  updateCredit(id: number, credit: Credit): Observable<Credit> {
    return this.http.put<Credit>(`${environment.apiUrl}/credits/${id}`, credit);
  }

  deleteCredit(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/credits/${id}`);
  }

  createCreditPersonnel(credit: CreditPersonnel): Observable<CreditPersonnel> {
    return this.http.post<CreditPersonnel>(`${environment.apiUrl}/credits/personnel`, credit);
  }

  createCreditImmobilier(credit: CreditImmobilier): Observable<CreditImmobilier> {
    return this.http.post<CreditImmobilier>(`${environment.apiUrl}/credits/immobilier`, credit);
  }

  createCreditProfessionnel(credit: CreditProfessionnel): Observable<CreditProfessionnel> {
    return this.http.post<CreditProfessionnel>(`${environment.apiUrl}/credits/professionnel`, credit);
  }

  updateCreditStatus(id: number, status: CreditStatus): Observable<Credit> {
    return this.http.patch<Credit>(`${environment.apiUrl}/credits/${id}/status`, { status });
  }

  // Remboursement operations
  getRemboursementsByCreditId(creditId: number): Observable<Remboursement[]> {
    return this.http.get<Remboursement[]>(`${environment.apiUrl}/credits/${creditId}/remboursements`);
  }

  createRemboursement(creditId: number, remboursement: Remboursement): Observable<Remboursement> {
    return this.http.post<Remboursement>(`${environment.apiUrl}/credits/${creditId}/remboursements`, remboursement);
  }

  // Credit type specific operations
  getCreditsByType(type: CreditType): Observable<Credit[]> {
    return this.http.get<Credit[]>(`${environment.apiUrl}/credits/type/${type}`);
  }

  getCreditsByStatus(status: CreditStatus): Observable<Credit[]> {
    return this.http.get<Credit[]>(`${environment.apiUrl}/credits/status/${status}`);
  }

  getCreditsByClient(clientId: number): Observable<Credit[]> {
    return this.http.get<Credit[]>(`${environment.apiUrl}/clients/${clientId}/credits`);
  }

  calculateMonthlyPayment(credit: Credit): Observable<number> {
    return this.http.post<number>(`${environment.apiUrl}/credits/calculate-payment`, credit);
  }

  validateCredit(id: number): Observable<Credit> {
    return this.http.post<Credit>(`${environment.apiUrl}/credits/${id}/validate`, {});
  }

  rejectCredit(id: number, reason: string): Observable<Credit> {
    return this.http.post<Credit>(`${environment.apiUrl}/credits/${id}/reject`, { reason });
  }
} 