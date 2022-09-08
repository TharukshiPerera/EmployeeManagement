import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-leaveadd',
  templateUrl: './leaveadd.component.html',
  styleUrls: ['./leaveadd.component.css']
})
export class LeaveaddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { 

  }
  leaveForm: FormGroup;
  ngOnInit() {

    this.leaveForm = this.formBuilder.group({
      eId:[],
      fNam: ['', [Validators.required, Validators.maxLength(20)]],
      lNam: ['', [Validators.required, Validators.maxLength(20)]],
      
      
      addr: ['', [Validators.required, Validators.maxLength(40)]],
      pho: ['', [Validators.required, Validators.maxLength(10)]],
      ema: ['', [Validators.required, Validators.maxLength(20)]],
      posi: ['', [Validators.required, Validators.maxLength(50)]],
      
      
      stdt: ['', [Validators.required, Validators.maxLength(8)]],
      enddate: ['', [Validators.required, Validators.maxLength(8)]] 
    });
  }

  onSbt(){
    console.log(this.leaveForm.value);

}


}