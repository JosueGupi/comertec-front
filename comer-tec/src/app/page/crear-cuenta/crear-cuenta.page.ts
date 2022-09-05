import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.page.html',
  styleUrls: ['./crear-cuenta.page.scss'],
})
export class CrearCuentaPage implements OnInit {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private service: ApiserviceService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Id: ['', Validators.required],
      StudentCard: ['', Validators.required],
      Name: ['', Validators.required],
      FirstSurname: ['', Validators.required],
      SecondSurname: ['', Validators.required],
      Age: ['', Validators.required],
      DateBirth: ['', Validators.required],
      Email: ['', Validators.required],
      TecPassword: ['', Validators.required],
    });
  }
  back() {
    this.route.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
  crearCuenta() {
    this.service
      .crearCuenta(this.registerForm.value)
      .subscribe(async (data) => {
        if (data == true) {
          const alert = await this.alertController.create({
            header: 'Creacion Correcta',
            message: 'Datos insertados',
            buttons: [
              {
                text: 'OK',
                handler: (blah) => {
                  this.route.navigate(['/']);
                },
              },
            ],
          });
          await alert.present();
        } else {
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
        }
      });
  }
}
