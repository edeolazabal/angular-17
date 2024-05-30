import { MatTableModule } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CursoService } from '../../service/curso.service';
import { Curso } from '../../model/curso';
import { Observable, throwError } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    ],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent implements OnInit {
  cursoForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private cursoService: CursoService,
    private router: Router
  ) {
    this.cursoForm = this.fb.group({
  //    id: ['', Validators.required],
      nombre: ['', Validators.required],
      creditos: ['', Validators.required],
    });
  }
  ngOnInit(): void { }

  async crearCurso(): Promise<any> {
    if (this.cursoForm.valid) {
      const nuevoCurso: Curso = this.cursoForm.value;
      (await this.cursoService.crearCurso(nuevoCurso)).subscribe(() => {
        this.router.navigate(['/crear']);
        this.cursoForm.reset();
      });
    }
  }

}
