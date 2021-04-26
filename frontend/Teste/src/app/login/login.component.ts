import { Component, OnInit } from '@angular/core';
import { servService } from '../services/serv.service';
import { Usuario } from '../model/Usuario';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario:Usuario = new Usuario();


  constructor(private servService: servService) {}

  ngOnInit(): void {
  }

fazerlogin() {

}

}
