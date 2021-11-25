import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariobeModel } from 'src/app/models/usuariobe';
import { UsuariobeService } from 'src/app/services/usuariobe.service';


@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.scss']
})
export class FormularioUsuarioComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({});
  public usuarioActualizar: UsuariobeModel | null = null;

  constructor(private formBuilder: FormBuilder, 
    private usuariobeService: UsuariobeService, 
    private router: Router) { }

  ngOnInit(): void {
    const actualizar = localStorage.getItem('usuarioActualizar');
    this.usuarioActualizar = actualizar ? JSON.parse(actualizar): null;
    console.log(this.usuarioActualizar);
    this.buildForm();
  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      nombres: [this.usuarioActualizar?.nombres, Validators.required],
      apellidos: [this.usuarioActualizar?.apellidos, Validators.required],
      email: [this.usuarioActualizar?.email, Validators.required],
      contra: [this.usuarioActualizar?.contra, Validators.required],
      grado: [this.usuarioActualizar?.grado, Validators.required],
      edad: [this.usuarioActualizar?.edad, Validators.required]
    })
  }

  public registrar(){
    console.log(this.formGroup.value);
    this.usuariobeService.registrar(this.formGroup.value).then(response => {
      alert('Usuario creado correctamente');
      this.router.navigate(['/usuariobe']);
    }).catch(error => {
      this.router.navigate(['/error']);
    })
  }

  public actualizarUsuario(){
    console.log(this.formGroup.value);
    const usuario: UsuariobeModel = {
      idusuario: this.usuarioActualizar?.idusuario,
      ...this.formGroup.value
    }
    this.usuariobeService.actualizarUsuario(usuario).then(response => {
      if(response.message === 'updated'){
        alert('Usuario actualizado correctamente');
        this.router.navigate(['/usuariobe']);
      }
    }).catch(error => {
      this.router.navigate(['/error']);
    })
  }

}
