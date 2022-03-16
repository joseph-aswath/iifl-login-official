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
     /*
    formData.append('panNumber',"111");
    formData.append('id','444');
    console.log("key check formData panNumber:",formData.has('panNumber')); //true
    console.log("key check formData id:",formData.has('id'));  //true
    console.log("formData keys list:",Object.keys(formData));  //[ ] length = 0
    */

    //template object
    var dataTemplate = {
      panNumber:"",
      //id:1
    }
    dataTemplate.panNumber = this.PAN.controls['FormInput'].value;
    console.log("object to be sent to node:",dataTemplate);
    //console.log("length of object",dataTemplate.panNumber.length);

    this.PostNumberService.sendPanNumber(dataTemplate).subscribe(()=>{
      console.log("pan-no, sent successfully");
      alert("pan number sent successfully!");
    })

  }

}
