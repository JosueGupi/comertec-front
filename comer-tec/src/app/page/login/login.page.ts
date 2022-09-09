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
    this.user = JSON.parse(localStorage.getItem('user'));
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
          console.log('data login: ', data);
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
          console.log('data login: ', data);
          if (data[0].Admin == 0){
            this.service.obtenerCatalogo().subscribe(async (response) => {
              this.catalog = response;
              console.log('data catalog:', this.catalog)
            });
            
            let navigationExtras = {
                queryParams: {
                  User: JSON.stringify(data[0].User)
                }
              };
            const alert = await this.alertController.create({
              header: 'Inicio de Sesión Correcto',
              message: 'Bienvenid@',
              buttons: [
                {
                  text: 'OK',
                  handler: (blah) => {
                    this.route.navigate(['/inicio', {user: 2222}]);
                  },
                },
              ],
            });
            await alert.present();
          } else {
            this.service.obtenerCatalogo().subscribe(async (response) => {
              this.catalog = response;
              console.log('data catalog:', this.catalog)
            });
            const alert = await this.alertController.create({
              header: 'Inicio de Sesión Correcto',
              message: 'Cuenta Administrativa',
              buttons: [
                {
                  text: 'OK',
                  handler: (blah) => {
                    this.route.navigate(['/menu-admin', this.catalog]);
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
