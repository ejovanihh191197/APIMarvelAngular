import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/search/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { TarjetaSuperheroeComponent } from './components/tarjeta-superheroe/tarjeta-superheroe.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { ComicsComponent } from './components/comics/comics.component';
import { FooterComponent } from './components/search/footer/footer.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './components/search/loading/loading.component';
import { TarjetaComicsComponent } from './components/tarjeta-comics/tarjeta-comics.component';
import { BuscadorComponent } from './components/search/buscador/buscador.component';
import { ComicComponent } from './components/comic/comic.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    TarjetaSuperheroeComponent,
    PersonajesComponent,
    ComicsComponent,
    FooterComponent,
    PersonajeComponent,
    LoadingComponent,
    TarjetaComicsComponent,
    BuscadorComponent,
    ComicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
