import { Component,OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'iifl-login-official';
  
  PAN : FormGroup;
  FormInput: FormControl;
  
  constructor(public fb : FormBuilder){
    
    this.PAN = new FormGroup({
      FormInput:new FormControl('',[Validators.pattern(/\w{5}\d{4}\w{1}/),Validators.maxLength(10)])
    });
    this.FormInput= new FormControl('',Validators.maxLength(10));                               
  }
  
  ngOnInit():void{
  
  }
}

