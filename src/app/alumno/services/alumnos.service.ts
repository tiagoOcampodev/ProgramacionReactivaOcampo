import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private alumnos: Alumno[] = [
    {
      nombre: 'James',
      apellido: 'Rodriguez',
      curso: {
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
      comision: 100, email: 'jamesRod@gmail.com'
    },

    {
      nombre: 'Juan Fernando',
      apellido: 'Quintero',
      curso: {
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
      comision: 101, email: 'juanferQuinte@gmail.com'
    },

    {
      nombre: 'Morena',
      apellido: 'Beltran',
      curso: {
        nombre: 'Javascript',
        comision: '103',
        profesor: {
          nombre: 'Martin Demichelis',
          correo: 'demichelis@gmail.com'
        },
        fechaInicio: new Date(2023, 2, 1, 20, 30, 0),
        fechaFin: new Date(2023, 2, 31, 20, 30, 0),
        inscripcionAbierta: true
      },
      comision: 103,
      email: 'morebeltrann@gmail.com'
    },
    {
      nombre: 'Carlos',
      apellido: 'Tevez',
      curso: {
        nombre: 'Diseño UX',
        comision: '105',
        profesor: {
          nombre: 'Enzo Dias',
          correo: 'enzo13@gmail.com'
        },
        fechaInicio: new Date(2023, 3, 1, 20, 30, 0),
        fechaFin: new Date(2023, 3, 31, 20, 30, 0),
        inscripcionAbierta: false
      },
      comision: 105,
      email: 'carlistostevez@gmail.com'
    },
    {
      nombre: 'Edgard',
      apellido: 'Hernandez',
      curso: {
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
      comision: 100,
      email: 'edgard@gmail.com'
    },
    {
      nombre: 'Laura',
      apellido: 'Perez',
      curso: {
        nombre: 'MySQL',
        comision: '108',
        profesor: {
          nombre: 'Miguel Borja',
          correo: 'borja_@gmail.com'
        },
        fechaInicio: new Date(2023, 3, 1, 20, 30, 0),
        fechaFin: new Date(2023, 3, 31, 20, 30, 0),
        inscripcionAbierta: false
      },
      comision: 104,
      email: 'lauperez@gmail.com'
    },
    {
      nombre: 'Alexis',
      apellido: 'Sanchez',
      curso: {
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
      comision: 101,
      email: 'alexisSanchez@gmail.com'
    }
  ];
  private alumnos$!: BehaviorSubject<Alumno[]>;


  constructor() {
    this.alumnos$ = new BehaviorSubject(this.alumnos);

    //MAP
    of(this.alumnos).pipe(
      map((alumnos: Alumno[]) =>{
        return alumnos.filter((alumno: Alumno) => alumno.curso.nombre == 'Angular')
      })
    ).subscribe((alumnos) =>{
      console.log("Obtenido mediante operador map, friltado por curso", alumnos)
    })
  }


  //OBSERVABLE
  getAlumnosObservable(): Observable<Alumno[]> {
    return this.alumnos$.asObservable();
  }

  //PROMISE
  getAlumnosPromise(): Promise<Alumno[]> {
    return new Promise((resolve, reject) => {
      if (this.alumnos.length > 0) {
        resolve(this.alumnos);
      } else {
        reject([]);
      }
    });
  }

}
