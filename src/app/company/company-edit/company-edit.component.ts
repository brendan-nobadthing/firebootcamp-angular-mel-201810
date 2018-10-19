import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';

@Component({
  selector: 'fbc-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

  companyId: number;
  isNewCompany: boolean;
  company = {} as Company;
  companyForm: FormGroup;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.companyId
      // tslint:disable-next-line:radix
      = parseInt(this.activatedRoute.snapshot.params['id']);
    this.isNewCompany = this.companyId === 0;

    this.buildForm();

    if (!this.isNewCompany) {
      this.companyService.getCompany(this.companyId)
        .subscribe(company => {
          this.companyForm.patchValue(company);
        });
    }
  }


  buildForm() {
    this.companyForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        phone: [''],
        email: ['']
      }

      // No type safety :(
    );
  }

  saveCompany() {
    if (this.isNewCompany) {
      this.companyService.addCompany(this.companyForm.value)
    } else {
      // This builds a new Company object with "Spread" operator (...)
      const currentCompany: Company = {...this.companyForm.value, id: this.companyId}
      this.companyService.updateCompany(currentCompany);
    }
    this.router.navigateByUrl('/company/list');
  }

}

