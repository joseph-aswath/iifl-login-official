import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataFormat } from './dataformat';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostNumberService {

  endpoint:string = "http://localhost:8000/";
  httpHeaders = new HttpHeaders().set('Content-Type','application/json');

  constructor(private http:HttpClient) { }

  sendPanNumber(data:DataFormat) : Observable<any>{
    return this.http.post(this.endpoint, data);
  }


}