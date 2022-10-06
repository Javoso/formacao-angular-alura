import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'home',
    loadChildren:()=>import('./home/home.module').then((m)=>m.HomeModule),
  },
  {
    path:'gatos',
    loadChildren:()=>import('./gatos/gatos.module').then((m)=>m.GatosModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
