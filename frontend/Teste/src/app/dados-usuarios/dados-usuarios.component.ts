import { Component, OnInit } from '@angular/core';
import { Cadastros } from '../model/Model';
import { Usuario } from '../model/Usuario';
import { servService } from '../services/serv.service'

@Component({
  selector: 'app-dados-usuarios',
  templateUrl: './dados-usuarios.component.html',
  styleUrls: ['./dados-usuarios.component.css']
})
export class DadosUsuariosComponent implements OnInit {

  listaUsersCadastrados: Cadastros[];
  cadastro: Cadastros = new Cadastros;
  listaUsersLogin: Usuario[];
  login: Usuario = new Usuario;

  constructor(private servService: servService) { }

  ngOnInit(): void {
    this.getAllDados();
    this.getAllDadosLogin()
  }

  getAllDados(){
    this.servService.getAll().subscribe((data: Cadastros[]) => {
      this.listaUsersCadastrados = data;
  })
}

  getAllDadosLogin(){
    this.servService.getAllLogin().subscribe((data: Usuario[]) => {
    this.listaUsersLogin = data;
})
}

}
