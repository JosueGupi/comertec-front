import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
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
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: ApiserviceService,
    public alertController: AlertController
  ) {  }

  ngOnInit() {
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
