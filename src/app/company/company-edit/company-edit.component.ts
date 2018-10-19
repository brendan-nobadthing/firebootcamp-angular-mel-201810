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
    = this.activatedRoute.snapshot.params['id']
    this.isNewCompany = this.companyId == 0;

    this.buildForm();

    if(!this.isNewCompany){
      // Load company details
    }
  }


  buildForm(){
    this.companyForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        phone: [''],
        email: ['']
      }

      // No type safety :(
    )
  }

  saveCompany(){
    if(this.isNewCompany){
      this.companyService
      .addCompany(this.companyForm.value)
      .subscribe(c => {
        this.router.navigateByUrl('/company/list')
      })
    }else{
      // update current company
    }
  }

}
