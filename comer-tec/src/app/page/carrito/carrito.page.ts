import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  inicio() {
    this.route.navigate(['/inicio']).then(() => {
      window.location.reload();
    });
  }

  comprar() {
    // lógica compra
    this.route.navigate(['/inicio']).then(() => {
      window.location.reload();
    });
  }

}
