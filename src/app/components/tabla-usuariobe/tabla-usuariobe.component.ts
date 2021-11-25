import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariobeModel } from 'src/app/models/usuariobe';
import { UsuariobeService } from 'src/app/services/usuariobe.service';

@Component({
  selector: 'app-tabla-usuariobe',
  templateUrl: './tabla-usuariobe.component.html',
  styleUrls: ['./tabla-usuariobe.component.scss']
})
export class TablaUsuariobeComponent implements OnInit {

  @Input() subtitulo: string = '';
  @Output() mostrarAlerta = new EventEmitter();

  public usuariobe: UsuariobeModel[] = [];

  constructor(private usuariobeService: UsuariobeService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    console.log(this.subtitulo);
    localStorage.clear();
    this.usuariobe = await this.listar();
    
  }

  public async listar(){
    try{
      const response = await this.usuariobeService.listar();
      return response.datos;
    }catch(error){
      this.router.navigate(['/error']);
    }
   
  }

  public eliminarUsuario(id:number){
    this.usuariobeService.eliminarUsuario(id).then(async response => {
      if(response.message === 'deleted'){
        this.usuariobe = await this.listar();
        this.mostrarAlerta.emit({mostrarAlert: true});
      }
    }).catch(error => {
      this.router.navigate(['/error']);
    })
  }

  public irActualizarUsuario(usuario: UsuariobeModel){
    localStorage.setItem('usuarioActualizar', JSON.stringify(usuario));
    this.router.navigate(['/formulario-usuario']);
  }

}
