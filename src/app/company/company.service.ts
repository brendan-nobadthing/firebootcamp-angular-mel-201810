import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  constructor(private httpClient: HttpClient) { }

  getCompanies(): Observable<Company[]> {

    return this.httpClient.get<Company[]>(`${this.API_BASE}/company`);

    // return [
    //   {name: "Company A", phone:12345, email:"companyA@ssw.com.au"},
    //   {name: "Company B", phone:12345, email:"companyB@ssw.com.au"},
    //   {name: "Company C", phone:12345, email:"companyC@ssw.com.au"},
    //   {name: "Company D", phone:12345, email:"companyD@ssw.com.au"},
    // ]
  }
}
