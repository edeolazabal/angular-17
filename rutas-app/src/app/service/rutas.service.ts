import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ruta } from '../model/rutas';

//const base_url = "http://localhost:3000/autos"
// const base_url = "https://scaling-fortnight-r75vg654x53xw4q-3000.app.github.dev/autos"
const base_url = 'http://localhost:3000'
// const base_url = 'http://localhost:8080/api'


@Injectable({
  providedIn: 'root'
})
export class RutaService {

  constructor(private http: HttpClient) { }

  async crearRuta(body: any) {
    const endpoint = `${base_url}/rutas`;
    return await this.http.post<Ruta>(endpoint, body)
  }

  async listarRutas() {
    const endpoint = `${base_url}/rutas`;
    return await  this.http.get<Ruta[]>(endpoint)
  }
}
