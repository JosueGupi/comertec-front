import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  filterCatalog = '';
  catalog = '';
  carrito = '';
  qty = [];
  constructor(private service: ApiserviceService) {}

  ngOnInit() {
    this.getCatalog();
    this.getCarrito();
  }

  getCatalog() {
    this.service.obtenerCatalogo().subscribe(async (response) => {
      this.catalog = response;
    });
  }

  getCarrito() {
    this.service
      .obtenerCarrito({ idPersona: localStorage.getItem('user') })
      .subscribe(async (response) => {
        this.carrito = response;
      });
  }

  insertCarrito(idAlimento) {
    this.service
      .insertCarrito({
        idAlimento: idAlimento,
        idPersona: localStorage.getItem('user'),
        cantidad: 1,
      })
      .subscribe(async (response) => {
        this.catalog = response;
      });
  }
}
