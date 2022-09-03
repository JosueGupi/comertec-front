import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'prueba',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'menu-admin',
    loadChildren: () => import('./page/menu-admin/menu-admin.module').then( m => m.MenuAdminPageModule)
  },
  {
    path: 'gestion-alimentos',
    loadChildren: () => import('./page/gestion-alimentos/gestion-alimentos.module').then( m => m.GestionAlimentosPageModule)
  },
  {
    path: 'gestion-clientes',
    loadChildren: () => import('./page/gestion-clientes/gestion-clientes.module').then( m => m.GestionClientesPageModule)
  },
  {
    path: 'agregar-alimento',
    loadChildren: () => import('./page/agregar-alimento/agregar-alimento.module').then( m => m.AgregarAlimentoPageModule)
  },
  {
    path: 'eliminar-alimento',
    loadChildren: () => import('./page/eliminar-alimento/eliminar-alimento.module').then( m => m.EliminarAlimentoPageModule)
  },
  {
    path: 'modificar-alimento',
    loadChildren: () => import('./page/modificar-alimento/modificar-alimento.module').then( m => m.ModificarAlimentoPageModule)
  },
  {
    path: 'modificar-cliente',
    loadChildren: () => import('./page/modificar-cliente/modificar-cliente.module').then( m => m.ModificarClientePageModule)
  },
  {
    path: 'eliminar-cliente',
    loadChildren: () => import('./page/eliminar-cliente/eliminar-cliente.module').then( m => m.EliminarClientePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'crear-cuenta',
    loadChildren: () => import('./crear-cuenta/crear-cuenta.module').then( m => m.CrearCuentaPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
