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
    
    iniciarSesion(data: any): Observable<any> {
      console.log(data);
      return this.http.post('https://comertec.herokuapp.com/client/login',data)
    }
    crearCuenta(data: any): Observable<any> {
      console.log(data);
      return this.http.post('https://comertec.herokuapp.com/client/create',data)
    }
    obtenerCatalogo(): Observable<any> {
      console.log("Obteniendo cat??logo...");
      const data = this.http.get('https://comertec.herokuapp.com/client/catalog')
      console.log(data)
      return data
    }    
    insertCarrito(data: any): Observable<any> {
      console.log("Insertando en carrito...", data);
      const response = this.http.post('https://comertec.herokuapp.com/client/insertShoppingCart', data)
      console.log('response carrito', response)
      return response
    }
    deleteCarrito(data: any): Observable<any> {
      console.log("Eliminando en carrito...", data);
      return this.http.post('https://comertec.herokuapp.com/client/deleteShoppingCart', data)
    }
    obtenerCarrito(data: any): Observable<any> {
      console.log("Obteniendo carrito...", data);
      const response = this.http.post('https://comertec.herokuapp.com/client/getShoppingCart', data)
      console.log(response)
      return response
    }  
    generarPedido(data: any): Observable<any> {
      console.log("Generando orden...", data);
      const response =  this.http.post('https://comertec.herokuapp.com/client/generateOrder', data)
      console.log('response',response)
      return response
    } 

    setUser(data: any) {
      localStorage.setItem('user', JSON.stringify(data));
    }
    setIdPedido(data: any) {
      localStorage.setItem('idPedido', JSON.stringify(data));
    }
    getAlimentosNuevos(data: any): Observable<any> {
      console.log(data);
      return this.http.post('https://comertec.herokuapp.com/adminPedidos/alimentosNuevos', data)
    }
    getAlimentosAgregados(data: any): Observable<any> {
      console.log(data);
      return this.http.post('https://comertec.herokuapp.com/adminPedidos/alimentosAgregados',data)
    }
    eliminarAlimentoPedido(data: any): Observable<any> {
      console.log(data);
      return this.http.post('https://comertec.herokuapp.com/adminPedidos/eliminarAlimentoPedido',data)
    }
    agregarAlimentoPedido(data: any): Observable<any> {
      console.log(data);
      return this.http.post('https://comertec.herokuapp.com/adminPedidos/agregarAlimentoPedido',data)
    }

}