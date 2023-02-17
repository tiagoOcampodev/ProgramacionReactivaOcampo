import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnoComponent } from './alumno/components/lista-alumno/lista-alumno.component';
import { CardCursoComponent } from './curso/components/card-curso/card-curso.component';

const routes: Routes = [
  {path: 'usuarios', component: ListaAlumnoComponent},
  {path: 'cursos', component: CardCursoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
