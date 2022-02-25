import { Component } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iifl-login-official';
  PAN : FormGroup;
  FormInput: FormControl;

  constructor(public fb : FormBuilder){
    
    this.PAN = new FormGroup({
      //formInput : new FormControl('',[Validators.pattern(/\w{5}\d{4}\w{1}/)])
    });
    this.FormInput= new FormControl([Validators.pattern(/\w{5}\d{4}\w{1}/),Validators.required]);
  }
  
}
