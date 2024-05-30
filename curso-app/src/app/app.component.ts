import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./component/navbar/navbar.component";
import { ListarComponent } from './component/listar/listar.component';
import { HttpClientModule } from '@angular/common/http';
import { CursoService } from './service/curso.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, ListarComponent, HttpClientModule],
    providers: [CursoService]
})
export class AppComponent {
  title = 'curso-app';
}
