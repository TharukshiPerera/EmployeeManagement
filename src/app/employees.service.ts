import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from './employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  getEmployees(){
    return this.http.get<Employees[]>('http://localhost/furniture_emp/list.php');
  }

  deleteEmployee(id: number){
    return this.http.delete<Employees[]>('http://localhost/furniture_emp/delete.php?id=' + id);
  }

  createEmployee(employee: Employees){
    return this.http.post('http://localhost/furniture_emp/insert.php', employee);

  }

  getById(id: number){
    return this.http.get<Employees[]>('http://localhost/furniture_emp/getById.php?id=' + id);
  }

  updateEmployee(employee: Employees){
    return this.http.put('http://localhost/furniture_emp/update.php' + '?id=' + employee.eId, employee);
  }

  
}
