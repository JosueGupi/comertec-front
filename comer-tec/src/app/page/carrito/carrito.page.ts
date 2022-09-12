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
      });
  }

  eliminarCarrito(idAlimento) {
    this.service
      .deleteCarrito({
        idPersona: JSON.parse(localStorage.getItem('user')),
        idAlimento: idAlimento,
      })
      .subscribe(async (response) => {
        const alert = await this.alertController.create({
          header: 'Información',
          message: 'Producto Eliminado Correcto',
          buttons: [
            {
              text: 'OK',
              handler: (blah) => {
                window.location.reload();
              },
            },
          ],
        });
        await alert.present();
      });
  }

  generarPedido() {
    this.service
      .generarPedido({
        idPersona: JSON.parse(localStorage.getItem('user')),
      })
      .subscribe(async (response) => {
        console.log('response carrito: ', response)
        if (response) {
          const alert = await this.alertController.create({
            header: 'Información',
            message:
              'Pedido Generado Correctamente. Por favor recibe su correo electrónico.',
            buttons: [
              {
                text: 'OK',
                handler: (blah) => {
                  window.location.reload();
                },
              },
            ],
          });
          await alert.present();
        } else {
          const alert = await this.alertController.create({
            header: 'Información',
            message: 'Carrito Vacío.',
            buttons: [
              {
                text: 'OK',
                handler: (blah) => {
                  window.location.reload();
                },
              },
            ],
          });
          await alert.present();
        }
      });
  }
}
