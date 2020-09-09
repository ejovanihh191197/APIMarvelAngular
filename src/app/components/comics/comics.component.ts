import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  comics: any[] = [];
  mostrar: boolean;

  constructor( private marvel: MarvelService,
               private router: Router ) {
    this.mostrar = false;
    this.getComics(80);
  }

  ngOnInit(): void {
  }

  getComics( limit?: number ): any{
    this.marvel.getComics( limit ).subscribe( (x: any) => {
      this.comics = x.data.results;
      this.mostrar = true;
    });
  }
  verComic( id: string ){
    this.router.navigate(['comic', id]);
  }
  comicsBuscados( terminoDeBusqueda: string ){

    const promesa = new Promise(( resolve, reject ) =>{
     if (terminoDeBusqueda !== ''){
      resolve();
     }else{
      reject();
     }
     setTimeout(resolve, 1000);
    });

    promesa.then((resolve) => {
      this.marvel.getComicBySearch(terminoDeBusqueda).subscribe( (x: any)=>{
        this.comics = x.data.results;
      });
    }).catch(() => {
      this.getComics(80);
    });

  }

}
