import { Injectable } from '@angular/core';
import { Http, Headers, Response   } from '@angular/http';
import { HttpHeaders , HttpClient , HttpParams  } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

//import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public token: string;
    
    constructor(private http: HttpClient) {
        // set token if saved in local storage
       // var currentUser = JSON.parse(localStorage.getItem('currentUser'));
       // this.token = currentUser && currentUser.token;
    }
    

    login(username: string, password: string) {
            
    const headers = new HttpHeaders()
          .set("Authorization", "Basic "+btoa(username+":"+password))
          .set("Content-Type", "application/json")

      var url = 'http://35.196.82.56:8080/myBus/rest/admin/login';
      
    const body = JSON.stringify({ username: username, password: password }) 

   // console.log(body)
        return this.http.post(
            url , 
            body ,
            { headers: headers }  )
            .map((response: Response) => {
                console.log(response);
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}