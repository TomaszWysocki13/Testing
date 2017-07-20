import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {
  baseUrl = 'http://pokeapi.co/api/v2/';

  constructor(private http: Http) {
  }
  getPokemons() {
    const url = `${this.baseUrl}pokemon/?limit=1000`;
    return this.http.get(url).map(pokemons => pokemons.json());
  }
  getPokemon(e: string) {
    const url = `${this.baseUrl}pokemon/${e}`;
    return this.http.get(url).map(pokemon => pokemon.json());
  }
  getGrowth(e: string) {
    const url = `${this.baseUrl}pokemon-species/${e}`;
    return this.http.get(url).map(pokemon => pokemon.json());
  }
}
