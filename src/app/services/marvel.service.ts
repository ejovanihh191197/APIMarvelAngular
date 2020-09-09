import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor( private http: HttpClient ) {}

  getQuery( query: string){
    const publicKey = 'ea122e17ac68ebe26522afd14aa306d1';
    const privateKey = 'a7cace3a10a5af02abd5b3700ff31151f88b3588';
    const urlBase = ' https://gateway.marvel.com';
    const ts = '1';
    const hash = '50537bd01ac863f1ff353bb946383e84';
    const url = `${urlBase}${query}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    return this.http.get(url);
  }

  getCharacters(limit: number = 20){
    return this.getQuery( `/v1/public/characters?orderBy=-modified&limit=${limit}` );
  }
  getCharacter(id: string){
    return this.getQuery( `/v1/public/characters/${id}?` );
  }
  getComics( limit: number = 20 ){
    return this.getQuery( `/v1/public/comics?orderBy=-focDate&limit=${limit}` );
  }
  getComic( id: string ){
    return this.getQuery(`/v1/public/comics/${id}?`);
  }
//Datos de un personaje por su ID
  getComicsById( id: string ){
    return this.getQuery(`/v1/public/characters/${id}/comics?orderBy=-focDate&limit=3`);
  }
  getEventsById( id: string ){
    return this.getQuery(`/v1/public/characters/${id}/events?`);
  }
  getSeriesById( id: string ){
    return this.getQuery(`/v1/public/characters/${id}/series?`);
  }
  getStoriesById( id: string ){
    return this.getQuery(`/v1/public/characters/${id}/stories?`);
  }
  //Busquedas
  getPersonajeBySearch( cadena: string ){
    return this.getQuery( `/v1/public/characters?nameStartsWith=${cadena}&limit=80` );
  }
  getComicBySearch( cadena: string ){
    return this.getQuery( `/v1/public/comics?titleStartsWith=${cadena}&limit=80` );
  }
}

