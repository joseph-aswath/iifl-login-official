import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-formvalidator',
  templateUrl: './formvalidator.component.html',
  styleUrls: ['./formvalidator.component.css']
})
export class FormvalidatorComponent implements OnInit {
/*
  PAN:FormGroup
  FormInput:FormControl
*/
  constructor(public fb:FormBuilder) { 
    /*
    this.PAN = new FormGroup({
    });
    this.FormInput = new FormControl('',Validators.required);
    */
  }

  ngOnInit(): void {
    
  }

}
