import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-superheroe',
  templateUrl: './tarjeta-superheroe.component.html',
  styleUrls: ['./tarjeta-superheroe.component.css']
})
export class TarjetaSuperheroeComponent implements OnInit {
  @Input()
  heroe: any;
  constructor() { }

  ngOnInit(): void {
  }

}
