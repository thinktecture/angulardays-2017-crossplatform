import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home';
import {StarWarsListComponent} from './components/list/starWarsList';
import {StarWarsDetailComponent} from './components/detail/starWarsDetail';
import {PokemonListComponent} from './components/list/pokemonList';
import {PokemonDetailComponent} from './components/detail/pokemonDetail';
import {MirrorComponent} from './components/mirror/mirror';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { state: 'home' }
  },
  {
    path: 'mirror',
    component: MirrorComponent,
    data: { state: 'mirror' }
  },
  {
    path: 'starwars',
    children: [
      {
        path: 'list/:model/:page',
        component: StarWarsListComponent,
        data: { state: 'starwars' }
      },
      {
        path: 'detail/:model/:id',
        component: StarWarsDetailComponent,
        data: { state: 'starwars' }
      }
    ]
  },
  {
    path: 'pokemon',
    children: [
      {
        path: 'list/pokemon/:page',
        component: PokemonListComponent,
        data: { state: 'pokemon' }
      },
      {
        path: 'detail/pokemon/:id',
        component: PokemonDetailComponent,
        data: { state: 'pokemon' }
      }
    ]
  }
];
