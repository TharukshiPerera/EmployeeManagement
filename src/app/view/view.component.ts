import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Employees } from '../employees';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  employees: Employees[];
  _id: any;

  

  constructor(private _employeesService: EmployeesService,
    private router: Router
    ) { }

  ngOnInit() {

     

    this._employeesService.getEmployees()
    .subscribe((data: Employees[]) => {
      this.employees = data;
      console.log(this.employees);
    });
  }

  delete(employees: Employees): void{
    
    this._employeesService.deleteEmployee(employees.eId)
    .subscribe(data => {
      this.employees = this.employees.filter(u => u !== employees);
    });
  }

  edit(employee: Employees){
    this._id = employee.eId;
    this.router.navigate(['edit/' + this._id]);
  }



 


}
