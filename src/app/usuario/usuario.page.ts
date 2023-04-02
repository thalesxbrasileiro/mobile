import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { Alunos } from '../model/alunos';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  alunos = new Array<Alunos>();
  constructor(service: HomeService) { 

    service.getAlunos().subscribe(response => (this.alunos = response));
  }

  ngOnInit() {
  }

}
