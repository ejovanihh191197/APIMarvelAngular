import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { ComicsComponent } from './components/comics/comics.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { ComicComponent } from './components/comic/comic.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'personajes', component: PersonajesComponent },
    { path: 'personaje/:id', component: PersonajeComponent },
    { path: 'comics', component: ComicsComponent },
    { path: 'comic/:id', component: ComicComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
