import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Employees } from '../employees';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private formBuilder:  FormBuilder,
    private _employeeService: EmployeesService,
    private router: Router,
    private routes: ActivatedRoute
    ) { 

 }

  addForm: FormGroup;

  ngOnInit() {
    const routeParams = this.routes.snapshot.params;

    //console.log(routeParams.id)

    

    this.addForm = this.formBuilder.group({
      eId: [''], 
      fName: ['', [Validators.required, Validators.maxLength(20)]],
      lName: ['', [Validators.required, Validators.maxLength(20)]],
      bday: ['', [Validators.required, Validators.maxLength(8)]],
      gender: [''],
      address: ['', [Validators.required, Validators.maxLength(40)]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.maxLength(20)]],
      qualifications: ['', [Validators.required, Validators.maxLength(50)]],
      position: ['', [Validators.required, Validators.maxLength(50)]],
      startdate: ['', [Validators.required, Validators.maxLength(8)]]
    });

    this._employeeService.getById(routeParams.id).subscribe((data: any) => {
      //console.log(data)
      this.addForm.patchValue(data);
    });

  }

  update(){
   // console.log(this.addForm.value);
   this._employeeService.updateEmployee(this.addForm.value).subscribe(() => {
     this.router.navigate(['view']);
   },
      error => {
        alert(error);
      });
  }
}
