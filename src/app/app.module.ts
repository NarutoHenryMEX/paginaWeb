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
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';

import { environment } from '../environments/environment'; 
import { AuthService} from './servicios/auth.service';

import { AuthGuard} from './seguridad/auth.guard';

import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';
import { OfertaPageComponent } from './componentes/oferta-page/oferta-page.component';
import { DetallesPageComponent } from './componentes/detalles-page/detalles-page.component';

import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFirestore} from '@angular/fire/firestore';

import { DetallesIdPageComponent } from './componentes/detalles-id-page/detalles-id-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ModalComponent } from './componentes/modal/modal.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    LoginPageComponent,
    CrudPageComponent,
    NoFoundPageComponent,
    DetallesPageComponent,
    OfertaPageComponent,
    DetallesIdPageComponent,
    ModalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfing),
    FlashMessagesModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFontAwesomeModule
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
