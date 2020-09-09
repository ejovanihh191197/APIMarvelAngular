import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-comics',
  templateUrl: './tarjeta-comics.component.html',
  styleUrls: ['./tarjeta-comics.component.css']
})
export class TarjetaComicsComponent implements OnInit {

  @Input()
  comic: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
