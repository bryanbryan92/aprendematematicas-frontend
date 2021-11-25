import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-usuariobe',
  templateUrl: './usuariobe.component.html',
  styleUrls: ['./usuariobe.component.scss']
})
export class UsuariobeComponent implements OnInit {



  public showAlert = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  public mostrarAlerta(evento: any){
    this.showAlert = evento.mostrarAlert;
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
    console.log(evento);
  }

}
