import { Component, OnInit } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  constructor() { }

  companies: Company[];

  ngOnInit() {
    this.companies = this.getCompanies();
  }

  getCompanies(): Company[]{
    return [
      {name: "Company A", phone:12345, email:"companyA@ssw.com.au"},
      {name: "Company B", phone:12345, email:"companyB@ssw.com.au"},
      {name: "Company C", phone:12345, email:"companyC@ssw.com.au"},
      {name: "Company D", phone:12345, email:"companyD@ssw.com.au"},
    ]
  }

}
