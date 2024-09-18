import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  // register(registerForm:any){
  //   console.log();
  //   return this.http.post<any>('http://localhost:8080/UserProfile/save',registerForm);

  // }



  
}