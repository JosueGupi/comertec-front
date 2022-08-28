import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';


@Injectable({
    providedIn: 'root',
  })

  export class ApiserviceService {


    constructor(private http: HttpClient){}
    
    crearAlimento(data: any): Observable<any> {
      console.log(data);
      return this.http.post('http://comertec.herokuapp.com/adminAlimentos/crearAlimento',data)
    }


}