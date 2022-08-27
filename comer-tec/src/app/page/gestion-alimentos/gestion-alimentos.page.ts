import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-alimentos',
  templateUrl: './gestion-alimentos.page.html',
  styleUrls: ['./gestion-alimentos.page.scss'],
})
export class GestionAlimentosPage implements OnInit {

  constructor(
    
    private route: Router,
    
    ) {

    }

  ngOnInit() {
  }
  back() {
    this.route.navigate(['/menu-admin']).then(() => {
      window.location.reload();
    });
  }
  agregarAlimento(){
    this.route.navigate(['/agregar-alimento']).then(() => {
      window.location.reload();
    });
  }
  eliminarAlimento(){
    this.route.navigate(['/eliminar-alimento']).then(() => {
      window.location.reload();
    });
  }
  modificarAlimento(){
    this.route.navigate(['/modificar-alimento']).then(() => {
      window.location.reload();
    });
  }

}
