import { Component, OnInit } from '@angular/core';
import { Cadastros } from '../model/Model';
import { servService } from '../services/serv.service'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  listaUsersCadastrados: Cadastros[];
  cadastro: Cadastros = new Cadastros;

  constructor(private servService: servService) { }

  ngOnInit() {
  }

  cadastrarUser() {
    this.servService.create(this.cadastro).subscribe((dados: Cadastros) => {
      this.cadastro = dados;
      location.assign('/basemap')
    })

    }
}
