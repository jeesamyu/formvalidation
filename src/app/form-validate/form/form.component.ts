import { Component, OnInit } from '@angular/core';

import { samyu } from 'src/main';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

Gender = ['Male' , 'Female' , 'Others'];

model = new samyu('' , 'samyu' , this.Gender[0] , 'jeesamyu2001@gmail.com' , 6382726401);

newdata() {
  this.model = new samyu ( '' , '' , '' , '' , 0 )
}

submitted = false; 

onSubmit() { this.submitted = true}

  constructor() { }

  ngOnInit(): void {
  }

}
