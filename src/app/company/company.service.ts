import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  constructor(private httpClient: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.httpClient
    .get<Company[]>(`${this.API_BASE}/company`)
    .pipe(
      catchError(this.myErrorHandler)
    );
  }

  deleteCompany(id: number): Observable<Company>{
    return this.httpClient
    .delete<Company>(`${this.API_BASE}/company/${id}`)
  }


  addCompany(company: Company): Observable<Company>{
    return this.httpClient
    .post<Company>(`${this.API_BASE}/company`, company,
      {
        headers: new HttpHeaders()
        .set('content-type', 'application/json')
      }
    )
    .pipe(this.myErrorHandler)
  }

  myErrorHandler(err): Observable<any> {
    console.error('service error', err);
    return new Observable();
  }
}
