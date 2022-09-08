import { Component, OnInit } from '@angular/core';
import { EmpleaveService } from '../empleave.service';
import { Empleave } from '../empleave';

@Component({
  selector: 'app-leaveview',
  templateUrl: './leaveview.component.html',
  styleUrls: ['./leaveview.component.css']
})
export class LeaveviewComponent implements OnInit {
  empleave: Empleave[];

  constructor(private _empleaveService: EmpleaveService) { }

  ngOnInit() {

    this._empleaveService.getEmpleave()
    .subscribe((data: Empleave[]) => {
      this.empleave = data;
      console.log(this.empleave);
    });
  }

}
