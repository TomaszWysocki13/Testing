import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';

import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  pokemons$: Observable<any>;


  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.pokemons$ = this.pokemonService.getPokemons();
  }
}
