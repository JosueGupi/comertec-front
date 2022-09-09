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
  private catalog: '';
  private user: '';
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
      window.location.reload();
    });
  }
  ingresar() {
    this.service
      .iniciarSesion(this.registerForm.value)
      .subscribe(async (data) => {
        if (data.length == 0) {
          const alert = await this.alertController.create({
            header: 'Creacion Fallida',
            message: 'Porfavor verifique los datos',
            buttons: [
              {
                text: 'OK',
              },
            ],
          });
          await alert.present();
        } else {
          localStorage.setItem('user', data[0].idPersona);
          if (data[0].Admin == 0) {
            const alert = await this.alertController.create({
              header: 'Inicio de Sesión Correcto',
              message: 'Bienvenid@',
              buttons: [
                {
                  text: 'OK',
                  handler: (blah) => {
                    this.route.navigate(['/inicio']);
                  },
                },
              ],
            });
            await alert.present();
          } else {
            const alert = await this.alertController.create({
              header: 'Inicio de Sesión Correcto',
              message: 'Cuenta Administrativa',
              buttons: [
                {
                  text: 'OK',
                  handler: (blah) => {
                    this.route.navigate(['/menu-admin']);
                  },
                },
              ],
            });
            await alert.present();
          }
        }
      });
  }
}
