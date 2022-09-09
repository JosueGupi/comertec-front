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
      return this.http.post('https://comertec.herokuapp.com/adminAlimentos/crearAlimento',data)
    }
    eliminarAlimento(data: any): Observable<any> {
      console.log(data);
      return this.http.post('https://comertec.herokuapp.com/adminAlimentos/eliminarAlimento',data)
    }
    actualizarAlimento(data: any): Observable<any> {
      console.log(data);
      return this.http.post('https://comertec.herokuapp.com/adminAlimentos/actualizarAlimento',data)
    }
    actualizarCliente(data: any): Observable<any> {
      console.log(data);
      return this.http.post('https://comertec.herokuapp.com/adminClientes/actualizarCliente',data)
    }
    eliminarCliente(data: any): Observable<any> {
      console.log(data);
      return this.http.post('https://comertec.herokuapp.com/adminClientes/eliminarCliente',data)
    }
    pedidosCliente(): Observable<any> {
      const data = this.http.get('https://comertec.herokuapp.com/adminClientes/obtenerHistorial');

      return data
    }
    getAlimentos(): Observable<any> {
      const data = this.http.get('https://comertec.herokuapp.com/adminAlimentos/obtenerAlimentos');

      return data

    }
    modificarTiempo(data: any): Observable<any> {
      return this.http.post('https://comertec.herokuapp.com/adminAlimentos/modificarTiempo',data);
    }
    eliminarPedido(data: any): Observable<any> {
      console.log(data);
      return this.http.post('https://comertec.herokuapp.com/adminPedidos/eliminarPedido',data)
    }
    actualizarPedido(data: any): Observable<any> {
      console.log(data);
      return this.http.post('https://comertec.herokuapp.com/adminPedidos/actualizarPedido',data)
    }
    iniciarSesion(data: any): Observable<any> {
      console.log(data);
      return this.http.post('https://comertec.herokuapp.com/client/login',data)
    }
    crearCuenta(data: any): Observable<any> {
      console.log(data);
      return this.http.post('https://comertec.herokuapp.com/client/create',data)
    }
    obtenerCatalogo(): Observable<any> {
      console.log("Obteniendo catálogo...");
      const data = this.http.get('https://comertec.herokuapp.com/client/catalog')
      console.log(data)
      return data
    }    
    insertCarrito(data: any): Observable<any> {
      console.log("Insertando en carrito...", data);
      return this.http.post('https://comertec.herokuapp.com/client/insertShoppingCart', data)

    }
    deleteCarrito(data: any): Observable<any> {
      console.log("Eliminando en carrito...", data);
      return this.http.post('https://comertec.herokuapp.com/client/deleteShoppingCart', data)
    }
    obtenerCarrito(data: any): Observable<any> {
      console.log("Obteniendo carrito...", data);
      try {
        const response = this.http.get('https://comertec.herokuapp.com/client/getShoppingCart', data)
        console.log('respuesta:', response)
      } catch (error) {
        console.log('ERROR!!!!', error)
      }
      return this.http.get('https://comertec.herokuapp.com/client/getShoppingCart', data)
    }    

    setUser(data: any) {
      localStorage.setItem('user', JSON.stringify(data));
    }

}