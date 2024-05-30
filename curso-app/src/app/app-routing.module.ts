import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './component/listar/listar.component';
import { CrearComponent } from './component/crear/crear.component';

export const routes: Routes = [
  { path: 'crear', component: CrearComponent },
  { path: 'listar', component: ListarComponent },
  { path: '', redirectTo: 'listar', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
