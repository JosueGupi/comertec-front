import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-agregar-alimento',
  templateUrl: './agregar-alimento.page.html',
  styleUrls: ['./agregar-alimento.page.scss'],
})
export class AgregarAlimentoPage implements OnInit {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private service: ApiserviceService,
    public alertController: AlertController,) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
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
  }

}
