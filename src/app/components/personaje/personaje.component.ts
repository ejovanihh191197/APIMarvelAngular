import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  personaje: any = {};
  comics: any[] = [];
  events: any = {};
  stories: any = {};
  series: any = {};
  id: string;
  mostrar: boolean;

  constructor( private marvel: MarvelService,
               private activatedRoute: ActivatedRoute,
               private router: Router ) {
    this.mostrar = true;
    this.getPersonaje();
    this.getComicsEventsStoriesSeries();
  }

  getId(){
    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
    });
  }

  getPersonaje(){
    this.mostrar = true;
    this.getId();
    this.marvel.getCharacter( this.id ).subscribe( (x: any) => {
      this.personaje = x.data.results[0];
      this.mostrar = false;
      console.log(this.personaje);
    });
  }

  getComicsEventsStoriesSeries(){
    this.mostrar = true;
    this.getId();
    this.marvel.getComicsById( this.id ).subscribe((x: any) => {
      this.comics = x.data.results;
      console.log(this.comics);
      this.mostrar = false;
    });
    this.marvel.getEventsById( this.id ).subscribe((x: any) => {
      this.events = x.data.results;
      this.mostrar = false;
    });
    this.marvel.getStoriesById( this.id ).subscribe((x: any) => {
      this.stories = x.data.results;
      this.mostrar = false;
    });
    this.marvel.getSeriesById( this.id ).subscribe((x: any) => {
      this.series = x.data.results;
      this.mostrar = false;
    });
  }
  regresar(){
    this.router.navigate(['/personajes']);
  }

  ngOnInit(): void {
  }

}
