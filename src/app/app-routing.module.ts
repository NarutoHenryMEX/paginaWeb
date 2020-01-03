import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { CrudPageComponent } from './componentes/crud-page/crud-page.component';
import { NoFoundPageComponent } from './componentes/no-found-page/no-found-page.component';
import {AuthGuard} from './seguridad/auth.guard';
import { OfertaPageComponent } from './componentes/oferta-page/oferta-page.component';
import { DetallesPageComponent } from './componentes/detalles-page/detalles-page.component';
import {DetallesIdPageComponent} from './componentes/detalles-id-page/detalles-id-page.component';

const routes: Routes = [
{path: '', component: HomePageComponent},
{path: 'login', component: LoginPageComponent},
{path: 'crud', component: CrudPageComponent, canActivate:[AuthGuard]},
{path: 'ofertas', component: OfertaPageComponent},
{path: 'detalles', component: DetallesPageComponent},
{path: 'detalles/:id', component: DetallesIdPageComponent},
{path: '**', component: NoFoundPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
