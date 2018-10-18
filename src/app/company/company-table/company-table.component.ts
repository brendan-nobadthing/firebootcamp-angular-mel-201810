import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'fbc-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss']
})
export class CompanyTableComponent implements OnInit {

  constructor() { }

  @Input()
  companies: Company[];

  ngOnInit() {
  }

}
