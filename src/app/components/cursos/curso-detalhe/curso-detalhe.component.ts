import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  imports: [],
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.scss'
})
export class CursoDetalheComponent {

  id: string;

  constructor(private route: ActivatedRoute){
    // console.log(this.route)
    this.id = this.route.snapshot.params['id']
  }
  idCurso!: string;
}
