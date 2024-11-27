import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  imports: [],
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.scss'
})
export class CursoDetalheComponent implements OnInit {

  id: string;
  inscricao!: Subscription;

  constructor(private route: ActivatedRoute){
    // console.log(this.route)
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit(): void {
    //params representa um tipo de objeto
    this.inscricao = this.route.params.subscribe((params: any)=> {
      this.id = params['id'];
    })
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }
}
