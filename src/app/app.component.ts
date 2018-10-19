import { Component, OnInit } from '@angular/core';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Observable } from 'rxjs';
import { CompanyService } from './company/company.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'fbc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private companyService: CompanyService) {
  }
  title = 'firebootcamp-crm';
  companyCount$: Observable<number>;

  ngOnInit(): void {
    this.companyCount$ = this.companyService.getCompanies()
      .pipe(
        map(c => c.length)
      );
  }

}
