import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.page.html',
  styleUrls: ['./editar-pedido.page.scss'],
})
export class EditarPedidoPage implements OnInit {
  addForm: FormGroup;
  deleteForm: FormGroup;
  alimentosAgregados = [];
  alimentosNuevos = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private service: ApiserviceService,
    public alertController: AlertController,) { }

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('idPedido')));

    this.addForm = this.formBuilder.group({
      IdAlimentoAgregar: ['', Validators.required],
      Cantidad: ['', Validators.required],
    });
    this.deleteForm = this.formBuilder.group({
      IdAlimentoEliminar: ['', Validators.required]
    });
    this.getAlimentosAgregados();
    this.getAlimentosNuevos();
  }
  getAlimentosNuevos() {
    this.service.getAlimentosNuevos({idPedido:JSON.parse(localStorage.getItem('idPedido'))}).subscribe((data: any) => {
      console.log(data);
      this.alimentosNuevos = data;
    })
  }
  getAlimentosAgregados() {
    this.service.getAlimentosAgregados({idPedido:JSON.parse(localStorage.getItem('idPedido'))}).subscribe((data: any) => {
      console.log(data);
      this.alimentosAgregados = data;
    })
  }
  back() {
    this.route.navigate(['/modificar-pedido']).then(() => {
      window.location.reload();
    });
  }
  borrar(){
    
    this.deleteForm.value.idPedido = JSON.parse(localStorage.getItem('idPedido'));
    this.service.eliminarAlimentoPedido(this.deleteForm.value).subscribe(async (data)=>{
      if(data == true){
        const alert = await this.alertController.create({
          header: 'Alimento Eliminado',
          message: 'Se elimino correctamente',
          buttons: [
            {
              text: 'OK',
              handler: (blah) => {
                this.route.navigate(['/modificar-pedido']);
              }
            }
          ]
        });
        await alert.present();
      }else{ 
        const alert = await this.alertController.create({
          header: 'Eliminacion Fallida',
          message: 'Porfavor verifique los datos',
          buttons: [
            {
              text: 'OK',
            }
          ]
        });
        await alert.present();
      }
    });
  }
  agregar(){
    
    this.addForm.value.idPedido = JSON.parse(localStorage.getItem('idPedido'));
    console.log(this.addForm.value)
    this.service.agregarAlimentoPedido(this.addForm.value).subscribe(async (data)=>{
      if(data == true){
        const alert = await this.alertController.create({
          header: 'Alimento Agregado',
          message: 'Se agrego correctamente',
          buttons: [
            {
              text: 'OK',
              handler: (blah) => {
                this.route.navigate(['/modificar-pedido']);
              }
            }
          ]
        });
        await alert.present();
      }else{ 
        const alert = await this.alertController.create({
          header: 'Agregacion Fallida',
          message: 'Porfavor verifique los datos',
          buttons: [
            {
              text: 'OK',
            }
          ]
        });
        await alert.present();
      }
    });
  }

}
