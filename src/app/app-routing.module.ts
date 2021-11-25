import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UsuariobeComponent } from './components/usuariobe/usuariobe.component';

const routes: Routes = [
  {path: 'usuariobe', component: UsuariobeComponent},
  {path: '', component: InicioComponent},
  {path: 'formulario-usuario', component: FormularioUsuarioComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
