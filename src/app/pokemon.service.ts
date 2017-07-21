import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {IPokemon} from './pokemon-interface';
import {IGrowth} from './growth-interface';

@Injectable()
export class PokemonService {
  baseUrl = 'http://pokeapi.co/api/v2/';

  constructor(private http: Http) {
  }
  getPokemons(): Observable<IPokemon[]> {
    const url = `${this.baseUrl}pokemon/?limit=1000`;
    return this.http.get(url).map(pokemons => {
      console.log('status: ', pokemons.statusText);
      return pokemons.json()
    });
  }
  getPokemon(e: string): Observable<IPokemon>  {
    const url = `${this.baseUrl}pokemon/${e}`;
    return this.http.get(url).map(pokemons => {
      console.log('status: ', pokemons.statusText);
      return pokemons.json()
    });
  }
  getGrowth(e: string): Observable<IGrowth>  {
    const url = `${this.baseUrl}pokemon-species/${e}`;
    return this.http.get(url).map(pokemons => {
      console.log('status: ', pokemons.statusText);
      return pokemons.json()
    });
  }
}
