import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-alimento',
  templateUrl: './modificar-alimento.page.html',
  styleUrls: ['./modificar-alimento.page.scss'],
})
export class ModificarAlimentoPage implements OnInit {

  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private service: ApiserviceService,
    public alertController: AlertController,) { }

    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        IdComida: ['', Validators.required],
        Nombre: ['', Validators.required],
        Cantidad: ['', Validators.required],
        TiempoAlimento: ['', Validators.required],
        Precio: ['', Validators.required],
        TipoAlimento: ['', Validators.required],
        
      });
    }
    back() {
      this.route.navigate(['/gestion-alimentos']).then(() => {
        window.location.reload();
      });
    }
  
    crear(){
      console.log(this.registerForm.value)
      this.service.actualizarAlimento(this.registerForm.value).subscribe(async (data)=>{
        if(data == true){
          const alert = await this.alertController.create({
            header: 'Modificacion Correcta',
            message: 'Datos modificados',
            buttons: [
              {
                text: 'OK',
                handler: (blah) => {
                  this.route.navigate(['/gestion-alimentos']);
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
