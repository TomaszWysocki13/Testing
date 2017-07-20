import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  pokemons$: Observable<any>;
  growth$: Observable<any>;
  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.pokemons$ = this.pokemonService.getPokemon(this.route.snapshot.url[1].path);
    this.growth$ = this.pokemonService.getGrowth(this.route.snapshot.url[1].path);
  }
  cancel() {
    this.location.back();
  }
}
