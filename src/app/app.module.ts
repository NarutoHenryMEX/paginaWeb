import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { CrudPageComponent } from './componentes/crud-page/crud-page.component';
import { NoFoundPageComponent } from './componentes/no-found-page/no-found-page.component';

import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';

import { environment } from '../environments/environment'; 
import { AuthService} from './servicios/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    LoginPageComponent,
    CrudPageComponent,
    NoFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfing)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
