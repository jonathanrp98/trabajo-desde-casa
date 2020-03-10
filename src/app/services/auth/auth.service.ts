import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Usuario} from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
    login(usuario:Usuario):Observable<any>{

      const urlEndpoing = 'http://smartdev.uniajc.edu.co:8888/RSU_LoginClient-0.0.1-SNAPSHOT/login/api/authentication';
      const credenciales = btoa('angular' + ':' + '12345');
      const httpHeaders = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencode', 
        'Authorization': 'Basic ' + credenciales
      });
    

      let params = new URLSearchParams();
      params.set('grant_type','password');
      params.set('username', usuario.username);
      params.set('password', usuario.password);
      console.log(params.toString());

      return this.http.post<any>(urlEndpoing, params.toString() , { headers: httpHeaders });

  }

}

