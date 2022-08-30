import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.scss'],
})
export class AlimentosComponent implements OnInit {

  constructor(private service: ApiserviceService) { }
  filterPedidos = '';
  pedidos = [];

  ngOnInit() {
    this.getPedidos()
    
    //pedidos = listaPedidos;
  }
  getPedidos(){
    this.service.pedidosCliente().subscribe((data: any) => {
      console.log(data);
      this.pedidos = data;
    })
  }

}
