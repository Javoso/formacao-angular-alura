import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './autenticacao/login.guard';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'home',
    loadChildren:()=>import('./home/home.module').then((m)=>m.HomeModule),
    canLoad: [LoginGuard]
  },
  {
    path:'gatos',
    loadChildren:()=>import('./gatos/gatos.module').then((m)=>m.GatosModule),
    canLoad: [AutenticacaoGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
