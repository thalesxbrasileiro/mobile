import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alunos } from '../model/alunos';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  endpoint = 'http://localhost:3000/alunos'

  constructor(public http: HttpClient) { 

  }

  public getAlunos(): Observable<Alunos[]> {
    return this.http.get<Alunos[]>(this.endpoint);
  }

  getCursos(){
    return ['Java', 'C', 'Angular'];
  }

}