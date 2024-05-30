import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RutaService } from '../../service/rutas.service';
import { Router } from '@angular/router';
import { Ruta } from '../../model/rutas';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    CommonModule

  ],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent  implements OnInit {
  rutaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rutaService: RutaService,
    private router: Router
  ) {
    this.rutaForm = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      fechaCreacion: ['', Validators.required],
      extension: ['']
    });
  }

  ngOnInit(): void { }

  async onSubmit(): Promise<void> {
    if (this.rutaForm.valid) {
      const newRuta: Ruta = this.rutaForm.value;
      (await this.rutaService.crearRuta(newRuta)).subscribe(() => {
        this.router.navigate(['/crear']);
        this.rutaForm.reset();
      });
    }
  }
}
