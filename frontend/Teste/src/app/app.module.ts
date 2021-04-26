import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DadosUsuariosComponent } from './dados-usuarios/dados-usuarios.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BasemapComponent } from './basemap/basemap.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { servService } from './services/serv.service';







@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    CadastroComponent,
    DadosUsuariosComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    BasemapComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [HttpClientModule, servService],
  bootstrap: [AppComponent]
})
export class AppModule { }
