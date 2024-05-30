import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./component/navbar/navbar.component";
import { CursoService } from './service/curso.service';
import { ListarComponent } from './component/listar/listar.component';
import { CrearComponent } from './component/crear/crear.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      HttpClientModule,
      RouterOutlet,
      NavbarComponent,
      ListarComponent,
      CrearComponent],
    providers: [CursoService]

})
export class AppComponent {
  title = 'curso-ng17';
}
