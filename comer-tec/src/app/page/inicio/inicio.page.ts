import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  registerForm: FormGroup;
  data: any;
  catalog: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: ApiserviceService,
    public alertController: AlertController
  ) {  }

  getCatalog(){
    this.service.obtenerCatalogo().subscribe(async (response) => {
      this.catalog = response;
      console.log('data catalog:', this.catalog);
    });
  }

  ngOnInit() {
    console.log(localStorage.getItem('user'))
    //this.getCatalog();
    this.registerForm = this.formBuilder.group({
      Search: ['', Validators.required],
      Filter: ['', Validators.required],
    });
  }
  back() {
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
  carrito() {
    this.router.navigate(['/carrito']).then(() => {
      window.location.reload();
    });
  }
}
