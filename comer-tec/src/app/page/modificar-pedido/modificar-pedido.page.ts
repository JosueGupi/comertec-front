import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-pedido',
  templateUrl: './modificar-pedido.page.html',
  styleUrls: ['./modificar-pedido.page.scss'],
})
export class ModificarPedidoPage implements OnInit {

  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private service: ApiserviceService,
    public alertController: AlertController,) { }

    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        IdPedido: ['', Validators.required]
        
      });
    }
    back() {
      this.route.navigate(['/gestionar-pedidos']).then(() => {
        window.location.reload();
      });
    }

    modificar(){
      console.log(this.registerForm.value.IdPedido);
      this.service.setIdPedido(this.registerForm.value.IdPedido)
      this.route.navigate(['/editar-pedido']).then(() => {
        window.location.reload();
      });
    }

}
