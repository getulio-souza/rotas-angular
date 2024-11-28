import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos(){
    return [
      {id: 1, nome: 'angular 2'},
      {id: 2, nome: 'react'},
      {id: 3, nome: 'javascript'},
    ]
  }

  getCursoById(id: number){
    let cursos = this.getCursos();
    for(let i = 0; i<cursos.length; i++){
      let curso = cursos[i]
      // console.log(curso)
      if(Number(curso.id) === Number(id)){
        return curso
      }
    }
    return null
  }

  constructor() { }
}
