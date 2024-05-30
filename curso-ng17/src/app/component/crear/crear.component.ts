import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CursoService } from '../../service/curso.service';
import { Curso } from '../../model/curso';

@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
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
      nombre: ['', Validators.required],
      creditos: ['', Validators.required],
    });
  }
ngOnInit(): void {}

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
