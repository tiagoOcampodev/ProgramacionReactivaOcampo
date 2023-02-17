import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos: Curso[] = [
    {
      nombre: 'Angular',
      comision: '100', 
      profesor: {
        nombre: 'Abner Garcia',
        correo: 'abner@gmail.com'
      },
      fechaInicio: new Date(2023, 0, 1, 20, 30, 0),
      fechaFin: new Date(2023, 0, 31, 20, 30, 0),
      inscripcionAbierta: true
    },
    {
      nombre: 'Javascript', 
      comision: '101', 
      profesor: {
        nombre: 'Martin Demichelis',
        correo: 'demichelis@gmail.com'
      },
      fechaInicio: new Date(2023, 1, 1, 20, 30, 0),
      fechaFin: new Date(2023, 1, 31, 20, 30, 0),
      inscripcionAbierta: false
    },
    {
      nombre: 'React', 
      comision: '102', 
      profesor: {
        nombre: 'Alejandro Garnacho',
        correo: 'garnacho7@gmail.com'
      },
      fechaInicio: new Date(2023, 2, 1, 20, 30, 0),
      fechaFin: new Date(2023, 2, 31, 20, 30, 0),
      inscripcionAbierta: true
    },
    {
      nombre: 'Diseño UX', 
      comision: '103', 
      profesor: {
        nombre: 'Enzo Dias',
        correo: 'enzo13@gmail.com'
      },
      fechaInicio: new Date(2023, 3, 1, 20, 30, 0),
      fechaFin: new Date(2023, 3, 31, 20, 30, 0),
      inscripcionAbierta: false
    },
    {
      nombre: 'MySQL', 
      comision: '104', 
      profesor: {
        nombre: 'Miguel Borja',
        correo: 'borja_@gmail.com'
      },
      fechaInicio: new Date(2023, 3, 1, 20, 30, 0),
      fechaFin: new Date(2023, 3, 31, 20, 30, 0),
      inscripcionAbierta: false
    }
  ];
  private cursos$!: BehaviorSubject<Curso[]>;


  constructor() {
    this.cursos$ = new BehaviorSubject(this.cursos);
  }

  obtenerCursosObservable(): Observable<Curso[]>{
    return this.cursos$.asObservable();
  }
  
}
