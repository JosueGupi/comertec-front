import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.page.html',
  styleUrls: ['./eliminar-cliente.page.scss'],
})
export class EliminarClientePage implements OnInit {

  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private service: ApiserviceService,
    public alertController: AlertController,) { }
    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        IdCliente: ['', Validators.required],
        
      });
    }
    back() {
      this.route.navigate(['/gestion-alimentos']).then(() => {
        window.location.reload();
      });
    }
  
    crear(){
      console.log(this.registerForm.value)
      this.service.eliminarCliente(this.registerForm.value).subscribe(async (data)=>{
        if(data == true){
          const alert = await this.alertController.create({
            header: 'Eliminacion Correcta',
            message: 'Datos eliminados',
            buttons: [
              {
                text: 'OK',
                handler: (blah) => {
                  this.route.navigate(['/gestion-clientes']);
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

}
