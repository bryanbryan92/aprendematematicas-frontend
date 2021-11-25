import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TablaUsuariobeComponent } from './components/tabla-usuariobe/tabla-usuariobe.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UsuariobeComponent } from './components/usuariobe/usuariobe.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuariobeService } from './services/usuariobe.service';
import { ErrorComponent } from './components/error/error.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TablaUsuariobeComponent,
    NotFoundComponent,
    UsuariobeComponent,
    ErrorComponent,
    FormularioUsuarioComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UsuariobeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
