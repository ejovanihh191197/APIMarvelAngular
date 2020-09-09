import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  @Output() eventos: EventEmitter<string>;

  constructor() {
    this.eventos = new EventEmitter();
  }

  ngOnInit(): void {
  }

  enviarCadena( termino: string ){
    this.eventos.emit( termino );
  }

}
