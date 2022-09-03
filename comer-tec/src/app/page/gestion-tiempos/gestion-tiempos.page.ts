import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GestionAlimentosPage } from '../gestion-alimentos/gestion-alimentos.page';
@Component({
  selector: 'app-gestion-tiempos',
  templateUrl: './gestion-tiempos.page.html',
  styleUrls: ['./gestion-tiempos.page.scss'],
})
export class GestionTiemposPage implements OnInit {
  alimentos = []
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private service: ApiserviceService,
    public alertController: AlertController,) { }

    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        IdAlimento: ['', Validators.required],
        TiempoAlimento: ['', Validators.required],
      });
      this.getAlimentos();
    }
  back() {
    this.route.navigate(['/menu-admin']).then(() => {
      window.location.reload();
    });
  }
  crear(){
    console.log(this.registerForm.value);
    
    this.service.modificarTiempo(this.registerForm.value).subscribe(async (data)=>{
      if(data == true){
        const alert = await this.alertController.create({
          header: 'Alimento Modificado',
          message: 'Tiempo Cambiado',
          buttons: [
            {
              text: 'OK',
              handler: (blah) => {
                this.route.navigate(['/menu-admin']);
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
  getAlimentos(){
    this.service.getAlimentos().subscribe((data: any) => {
      this.alimentos = data;
    })
  }
}

