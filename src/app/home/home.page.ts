import { Component } from '@angular/core';
import { Alunos } from '../model/alunos';
import { Usuario } from '../model/usuario';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { 
  }

  titulo = 'UNIFACISA';
  link = "usuario";       // com variável

  user: Usuario = new Usuario();

  onSave(){
     //alert("Seja Bem-vindo!");
  }
}
