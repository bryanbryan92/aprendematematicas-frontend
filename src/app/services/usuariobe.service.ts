import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuariobeModel } from '../models/usuariobe';

@Injectable({
  providedIn: 'root'
})
export class UsuariobeService {

  constructor(private http: HttpClient) { }

  public listar(): Promise<any> {
    const url = `${environment.apiUrl}/listar`;
    return this.http.get(url).toPromise();
  }

  public usuario(id: number){}

  public registrar(usuario: any): Promise<any> {
    const url = `${environment.apiUrl}/registrar`;
    return this.http.post(url, usuario).toPromise();
  }
  public actualizarUsuario(usuario: UsuariobeModel): Promise<any> {
    const url = `${environment.apiUrl}/actualizarUsuario/${usuario.idusuario}`;
    return this.http.put(url, usuario).toPromise();
  }
  
  public eliminarUsuario(id: number): Promise<any> {
    return this.http.delete(`${environment.apiUrl}/eliminarUsuario/${id}`).toPromise();
  }
}
