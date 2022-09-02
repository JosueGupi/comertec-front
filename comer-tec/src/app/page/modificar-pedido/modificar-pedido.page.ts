import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-pedido',
  templateUrl: './modificar-pedido.page.html',
  styleUrls: ['./modificar-pedido.page.scss'],
})
export class ModificarPedidoPage implements OnInit {

  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private service: ApiserviceService,
    public alertController: AlertController,) { }

    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        IdPedido: ['', Validators.required],
        IdPersona: ['', Validators.required],
        IdPedidoxAlimento: ['', Validators.required],
        Fecha: ['', Validators.required],
        
      });
    }
    back() {
      this.route.navigate(['/gestionar-pedidos']).then(() => {
        window.location.reload();
      });
    }

    modificar(){
      console.log(this.registerForm.value)
      this.service.actualizarPedido(this.registerForm.value).subscribe(async (data)=>{
        if(data == true){
          const alert = await this.alertController.create({
            header: 'Actulizacion Correcta',
            message: 'Datos modificados',
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
            header: 'Modificacion Fallida',
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
