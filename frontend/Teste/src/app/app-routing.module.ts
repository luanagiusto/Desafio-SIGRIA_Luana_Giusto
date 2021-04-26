import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DadosUsuariosComponent } from './dados-usuarios/dados-usuarios.component';
import { FooterComponent } from './footer/footer.component';
import { BasemapComponent } from './basemap/basemap.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'cadastro', component: CadastroComponent},
    { path: 'dados-usuarios', component: DadosUsuariosComponent},
    { path: 'navbar', component: NavbarComponent},
    { path: 'footer', component: FooterComponent},
    { path: 'basemap', component: BasemapComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
