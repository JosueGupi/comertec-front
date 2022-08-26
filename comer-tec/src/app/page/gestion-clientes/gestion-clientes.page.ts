import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gestion-clientes',
  templateUrl: './gestion-clientes.page.html',
  styleUrls: ['./gestion-clientes.page.scss'],
})
export class GestionClientesPage implements OnInit {

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
}
