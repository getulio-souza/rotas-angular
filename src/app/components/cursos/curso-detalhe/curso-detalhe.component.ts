import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  imports: [],
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.scss'
})
export class CursoDetalheComponent implements OnInit {

  id!: number;
  inscricao!: Subscription;
  curso!:any;

  constructor(private route: ActivatedRoute, private cursosService: CursosService){
    // console.log(this.route)
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit(): void {
    //params representa um tipo de objeto
    this.inscricao = this.route.params.subscribe((params: any)=> {
      this.id = params['id'];

      this.curso = this.cursosService.getCursoById(this.id);
    })
  }

  ngOnDestroy(){
    if(this.inscricao){
      this.inscricao.unsubscribe();
    }
  }
}
