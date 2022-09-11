import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  carrito = '';
  total = 0;

  constructor(
    private route: Router,
    private service: ApiserviceService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.getCarrito();
  }

  inicio() {
    this.route.navigate(['/inicio']).then(() => {
      window.location.reload();
    });
  }

  comprar() {
    this.route.navigate(['/inicio']).then(() => {
      window.location.reload();
    });
  }

  getCarrito() {
    this.service
      .obtenerCarrito({ idPersona: JSON.parse(localStorage.getItem('user')) })
      .subscribe(async (response) => {
        this.carrito = response;
        for (var i in response) {
          this.total += parseInt(response[i].Precio);
          console.log('response carrito: ' + response[i])
          var object = JSON.stringify(response[i])
          console.log(object)
        }
      });
  }

  eliminarCarrito(idAlimento) {
    this.service
      .deleteCarrito({
        idPersona: JSON.parse(localStorage.getItem('user')),
        idAlimento: idAlimento,
      })
      .subscribe(async (response) => {
        window.location.reload();
      });
  }

  generarPedido() {
    this.service
      .generarPedido({
        idPersona: JSON.parse(localStorage.getItem('user')),
      })
      .subscribe(async (response) => {
        window.location.reload();
      });
  }
}
