import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies: Company[];

  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.companyService.getCompanies()
      .subscribe(
        next =>  this.companies = next,
        err => console.error('component error', err)
      );
  }
}
