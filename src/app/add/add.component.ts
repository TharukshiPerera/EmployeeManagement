import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';
import { Employees } from '../employees';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  employees: Employees[];
  
  

  constructor(private formBuilder:  FormBuilder,
     private _employeeService: EmployeesService,
     private router: Router
     ) { 


    
      

  }
  addForm: FormGroup;

  ngOnInit() {

   

    this.addForm = this.formBuilder.group({
      
      
      fName: ['', [Validators.required, Validators.maxLength(20)]],
      lName: ['', [Validators.required, Validators.maxLength(20)]],
      bday: ['', [Validators.required, Validators.maxLength(8)]],
      gender: [],
      address: ['', [Validators.required, Validators.maxLength(40)]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.maxLength(20)]],
      qualifications: ['', [Validators.required, Validators.maxLength(50)]],
      position: ['', [Validators.required, Validators.maxLength(50)]],
      startdate: ['', [Validators.required, Validators.maxLength(8)]] 
    });

  
  }

  onSubmit(){
    //console.log(this.addForm.value);
    this._employeeService.createEmployee(this.addForm.value)
    .subscribe(data => {
      this.router.navigate(['view']);
    },
    )
  };

}


 
