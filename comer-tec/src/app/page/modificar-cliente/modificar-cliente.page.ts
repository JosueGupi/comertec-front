import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.page.html',
  styleUrls: ['./modificar-cliente.page.scss'],
})
export class ModificarClientePage implements OnInit {

  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private service: ApiserviceService,
    public alertController: AlertController,) { }

    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        Nombre: ['', Validators.required],
        Apellido1: ['', Validators.required],
        Apellido2: ['', Validators.required],
        Carnet: ['', Validators.required],
        Cedula: ['', Validators.required],
        Fecha: ['', Validators.required],
        Correo: ['', Validators.required],
        Password: ['', Validators.required],
        
      });
    }
    back() {
      this.route.navigate(['/gestion-alimentos']).then(() => {
        window.location.reload();
      });
    }
  
    crear(){
      console.log(this.registerForm.value)
    }

}
