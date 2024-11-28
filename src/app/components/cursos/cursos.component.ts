import { Component, Input, OnInit } from '@angular/core';
import { CursosService } from './services/cursos.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cursos',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit{

  @Input()cursos!: any[];

  constructor(private cursosService: CursosService){}

  ngOnInit(){
    this.cursos = this.cursosService.getCursos();
  }
}
