import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gestionar-pedidos',
  templateUrl: './gestionar-pedidos.page.html',
  styleUrls: ['./gestionar-pedidos.page.scss'],
})
export class GestionarPedidosPage implements OnInit {

  constructor(
    private route: Router
    ) {

    }

  ngOnInit() {
  }
  back() {
    this.route.navigate(['/menu-admin']).then(() => {
      window.location.reload();
    });
  }
  modificarPedido() {
    this.route.navigate(['/modificar-pedido']).then(() => {
      window.location.reload();
    });
  }
  eliminarPedido() {
    this.route.navigate(['/eliminar-pedido']).then(() => {
      window.location.reload();
    });
  }
  historialPedido() {
    this.route.navigate(['/historial-pedido']).then(() => {
      window.location.reload();
    });
}
}
