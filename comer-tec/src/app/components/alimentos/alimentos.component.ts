import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.scss'],
})
export class AlimentosComponent implements OnInit {

  constructor(private service: ApiserviceService,public alertController: AlertController) { }
  filterPedidos = '';
  pedidos = [];

  ngOnInit() {
    this.getPedidos()
    
    //pedidos = listaPedidos;
  }
  getPedidos(){
    this.service.pedidosCliente().subscribe((data: any) => {
      this.pedidos = data;
    })
  }
  async getDatosCliente(carnet: any,correo: any) {
    
    const alert =  await this.alertController.create({
      header: carnet,
      message: correo,
      buttons: [{ text: 'OK', }]
    });
     await alert.present();
  }

}
