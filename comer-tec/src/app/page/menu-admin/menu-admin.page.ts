import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.page.html',
  styleUrls: ['./menu-admin.page.scss'],
})
export class MenuAdminPage implements OnInit {

  constructor(
    private route: Router
    ) {

    }

  ngOnInit() {
    
  }
  back() {
    this.route.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
  gestionAlimentos() {
    this.route.navigate(['/gestion-alimentos']).then(() => {
      window.location.reload();
    });
  }
  gestionClientes() {
    this.route.navigate(['/gestion-clientes']).then(() => {
      window.location.reload();
    });
  }
  gestionPedidos() {
    this.route.navigate(['/gestionar-pedidos']).then(() => {
      window.location.reload();
    });
  }
}
