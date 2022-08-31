import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-eliminar-pedido',
  templateUrl: './eliminar-pedido.page.html',
  styleUrls: ['./eliminar-pedido.page.scss'],
})
export class EliminarPedidoPage implements OnInit {

  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private service: ApiserviceService,
    public alertController: AlertController,) { }
    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        IdPedido: ['', Validators.required],
        
      });
    }
    back() {
      this.route.navigate(['/gestionar-pedidos']).then(() => {
        window.location.reload();
      });
    }
  
    /*crear(){
      console.log(this.registerForm.value)
      this.service.eliminarPedido(this.registerForm.value).subscribe(async (data)=>{
        if(data == true){
          const alert = await this.alertController.create({
            header: 'Eliminacion Correcta',
            message: 'Datos eliminados',
            buttons: [
              {
                text: 'OK',
                handler: (blah) => {
                  this.route.navigate(['/gestionar-pedidos']);
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
    }*/     //Implementar

}