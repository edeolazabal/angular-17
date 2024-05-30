import { MatCardModule } from '@angular/material/card';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RutaService } from '../../service/rutas.service';
import { Ruta } from '../../model/rutas';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule,
  ],
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  rutas: MatTableDataSource<Ruta> = new MatTableDataSource<Ruta>();
  displayedColumns: string[] = ['codigo', 'nombre', 'tipo', 'fechaCreacion', 'extension'];
  pageSizeOptions: number[] = [3, 6, 9];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private rutaService: RutaService) { }

  async ngOnInit() {
    (await this.rutaService.listarRutas()).subscribe(data => {
      console.log(data)
      this.rutas.data = data;
      this.rutas.paginator = this.paginator;
    });
  }
}
