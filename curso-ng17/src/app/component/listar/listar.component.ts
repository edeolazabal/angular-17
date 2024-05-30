import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Curso } from '../../model/curso';
import { CursoService } from '../../service/curso.service';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [
    RouterModule,
    MatTableModule,
    MatCardModule,
  ],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{
  cursos: MatTableDataSource<Curso> = new MatTableDataSource<Curso>()
  displayedColumns : string[] = ['id', 'nombre', 'creditos']

  constructor(private cursoService: CursoService) { }

  async ngOnInit() {
    (await this.cursoService.listarCursos()).subscribe((data: Curso[]) => {
      this.cursos.data = data;
    });

  }

}
