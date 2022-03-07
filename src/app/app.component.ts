import { Component,OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { ComponentComponent } from './component/component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'iifl-login-official';
  constructor(public fb : FormBuilder,private http: HttpClient,private componentComponent:ComponentComponent){}
  ngOnInit():void{}
}




