import { Component, OnInit } from '@angular/core';
import { PostNumberService } from '../service/post-number.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  PAN:FormGroup;

  constructor(private http:HttpClient,public PostNumberService:PostNumberService) { 
    this.PAN = new FormGroup({
      FormInput : new FormControl('',[Validators.pattern(/\w{5}\d{4}\w{1}/),
                                      Validators.maxLength(10),
                                      Validators.required]) 
      })
  }

  ngOnInit(): void {}
  
  submitForm():any{
    this.PostNumberService.sendPanNumber(this.PAN.controls['FormInput'].value).subscribe(()=>{
      console.log("pan number sent successfully");
    })
  }
}
