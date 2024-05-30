import { CursoService } from './../../service/curso.service';
import { MatCardModule } from '@angular/material/card';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { Curso } from '../../model/curso';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule,
    RouterModule,
  ],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent  implements OnInit {
  cursos: MatTableDataSource<Curso> = new MatTableDataSource<Curso>();
  displayedColumns: string[] = ['id', 'nombre', 'creditos'];

  constructor(private cursoService: CursoService) { }

  async ngOnInit() {
    (await this.cursoService.listarCursos()).subscribe((data: Curso[]) => {
      console.log('leyendo...')
      console.log(data)
      this.cursos.data = data;
    });
  }

}

