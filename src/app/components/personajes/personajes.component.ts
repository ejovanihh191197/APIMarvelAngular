import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  characters: any[] = [];
  mostrar: boolean;

  constructor( private marvel: MarvelService,
               private router: Router ) {
    this.mostrar = true;
    this.marvel.getCharacters(80).subscribe( (x: any) => {
      this.characters = x.data.results;
      this.mostrar = false;
      console.log(this.characters);
    });
  }


  ngOnInit(): void {
  }

  irAPersonaje(id: string): any{
    this.router.navigate(['personaje', id]);
  }

  buscarPersonaje( cadena: string ): any{
    this.mostrar = true;
    if ( cadena !== '' ){
      this.marvel.getPersonajeBySearch(cadena).subscribe( (x: any) => {
        this.characters = x.data.results;
        this.mostrar = false;
      });
    }else{
      this.marvel.getCharacters(80).subscribe( (x: any) => {
        this.characters = x.data.results;
        this.mostrar = false;
      });
    }
  }

}
