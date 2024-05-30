import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../model/curso';
import { Observable, catchError, throwError } from 'rxjs';

const base_url = 'http://localhost:3000/cursos'

@Injectable({
  providedIn: 'root'
})
export class CursoService {


  constructor(private http: HttpClient) { }

  async crearCurso(body: any) {
    const endpoint = `${base_url}`;
    return this.http.post<Curso>(endpoint, body).pipe(
      catchError(this.handleError)
    )
  }

  async listarCursos(): Promise<Observable<any>> {
    const endpoint = `${base_url}`;
    return this.http.get<any>(endpoint).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: any): Observable<never> {
    console.error('Se presentó el siguiente error:', error); // Log the error for debugging
    return throwError('Algo salió mal; por favor trate más tarde.');
  }
}
