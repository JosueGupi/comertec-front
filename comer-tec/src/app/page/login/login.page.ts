import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private service: ApiserviceService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      User: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }
  crearCuenta() {
    this.route.navigate(['/crear-cuenta']).then(() => {
      //lógica inicio de sesión
      window.location.reload();
    });
  }
  ingresar() {
    this.service.iniciarSesion(this.registerForm.value).subscribe(async (data)=>{
      if(data == true){
        const alert = await this.alertController.create({
          header: 'Creacion Correcta',
          message: 'Datos insertados',
          buttons: [
            {
              text: 'OK',
              handler: (blah) => {
                this.route.navigate(['/inicio']);
              }
            }
          ]
        });
        await alert.present();
      }else{ 
        const alert = await this.alertController.create({
          header: 'Creacion Fallida',
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
    /* this.route.navigate(['/inicio']).then(() => {
      window.location.reload();
    }); */
  }
}
