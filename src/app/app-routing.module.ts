import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { CrudPageComponent } from './componentes/crud-page/crud-page.component';
import { NoFoundPageComponent } from './componentes/no-found-page/no-found-page.component';
import {AuthGuard} from './seguridad/auth.guard';

const routes: Routes = [
{path: '', component: HomePageComponent},
{path: 'login', component: LoginPageComponent},
{path: 'crud', component: CrudPageComponent, canActivate:[AuthGuard]},
{path: '**', component: NoFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
