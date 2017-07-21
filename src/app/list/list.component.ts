import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';

import { PokemonService } from '../pokemon.service';
import { IPokemon } from '../pokemon-interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  pokemons$: Observable<IPokemon[]>;
  filteredName: string;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.pokemons$ = this.pokemonService.getPokemons();
  }
}
