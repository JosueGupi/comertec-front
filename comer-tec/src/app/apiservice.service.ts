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
    eliminarAlimento(data: any): Observable<any> {
      console.log(data);
      return this.http.post('http://comertec.herokuapp.com/adminAlimentos/eliminarAlimento',data)
    }
    actualizarAlimento(data: any): Observable<any> {
      console.log(data);
      return this.http.post('http://comertec.herokuapp.com/adminAlimentos/actualizarAlimento',data)
    }
    actualizarCliente(data: any): Observable<any> {
      console.log(data);
      return this.http.post('http://comertec.herokuapp.com/adminClientes/actualizarCliente',data)
    }
    eliminarCliente(data: any): Observable<any> {
      console.log(data);
      return this.http.post('http://comertec.herokuapp.com/adminClientes/eliminarCliente',data)
    }
    pedidosCliente(): Observable<any> {
      const data = this.http.get('http://comertec.herokuapp.com/adminClientes/obtenerHistorial');

      return data
    }
<<<<<<< Updated upstream
    getAlimentos(): Observable<any> {
      const data = this.http.get('http://comertec.herokuapp.com/adminAlimentos/obtenerAlimentos');

      return data

    }
    modificarTiempo(data: any): Observable<any> {
      return this.http.post('http://comertec.herokuapp.com/adminAlimentos/modificarTiempo',data);
=======
    eliminarPedido(data: any): Observable<any> {
      console.log(data);
      return this.http.post('http://comertec.herokuapp.com/adminPedidos/eliminarPedido',data)
    }
    actualizarPedido(data: any): Observable<any> {
      console.log(data);
      return this.http.post('http://comertec.herokuapp.com/adminPedidos/actualizarPedido',data)
>>>>>>> Stashed changes
    }

}