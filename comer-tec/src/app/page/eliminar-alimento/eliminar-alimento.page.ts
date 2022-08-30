import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-eliminar-alimento',
  templateUrl: './eliminar-alimento.page.html',
  styleUrls: ['./eliminar-alimento.page.scss'],
})
export class EliminarAlimentoPage implements OnInit {

  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private service: ApiserviceService,
    public alertController: AlertController,) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      IdComida: ['', Validators.required],
      
    });
  }
  back() {
    this.route.navigate(['/gestion-alimentos']).then(() => {
      window.location.reload();
    });
  }

  crear(){
    console.log(this.registerForm.value)
    this.service.eliminarAlimento(this.registerForm.value).subscribe(async (data)=>{
      if(data == true){
        const alert = await this.alertController.create({
          header: 'Eliminacion Correcta',
          message: 'Datos eliminados',
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
