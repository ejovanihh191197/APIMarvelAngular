import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  idComic: string;
  comic: any = {};
  mostrar: boolean;

  constructor( private marvel: MarvelService ,
               private params: ActivatedRoute,
               private router: Router ) {
    this.mostrar = false;
    this.getComic();
  }

  ngOnInit(): void {
  }

  getId(): any {
    this.params.params.subscribe( (param: any) => {
      this.idComic = param.id;
    });
  }

  getComic(): any {
    this.getId();
    this.marvel.getComic( this.idComic ).subscribe((x: any) => {
      this.comic = x.data.results[0];
      console.log(this.comic);
      this.mostrar = true;
    });
  }
  regresar(): any {
    this.router.navigate(['comics']);
  }

}
