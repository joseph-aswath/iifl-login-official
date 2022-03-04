import { Component,OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'iifl-login-official';
  PAN:FormGroup;
  constructor(public fb : FormBuilder,private http: HttpClient){
    this.PAN = new FormGroup({
       FormInput : new FormControl('',[Validators.pattern(/\w{5}\d{4}\w{1}/),
                                       Validators.maxLength(10),
                                       Validators.required]) 
    });         
  }
  
  ngOnInit():void{}

   submitForm(){
    var panNo:string = this.PAN.controls['FormInput'].value;  //this.PAN.get('FormInput).value

    /*
    var formData =new FormData();
    formData.append("name",panNo);
    formData.append("id","5");
    */
    var obj1 = {
      name : "abcdef",
      id:77
    }
    //return this.http.post("http://localhost:8000/",formData);
    console.log("testing submitForm method"); //-> testing submitForm() method 
    return this.http.post("http://localhost:8000/",obj1);
  }

}

