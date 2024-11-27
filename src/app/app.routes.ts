import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ModuleWithProviders } from '@angular/core';
import { CursoDetalheComponent } from './components/cursos/curso-detalhe/curso-detalhe.component';

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {path: 'curso/:id', component: CursoDetalheComponent},
  {path: 'cursos', component: CursosComponent}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);
