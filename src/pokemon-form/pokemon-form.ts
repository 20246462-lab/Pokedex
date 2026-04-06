import { Component, Inject, ChangeDetectionStrategy, signal, OnInit, inject} from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-form',
  imports: [],
  templateUrl: './pokemon-form.html',
  styleUrl: './pokemon-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonForm implements OnInit {
PokemonService = inject(Pokemon);
ngOnInit() {
  this.PokemonService.fetchPokemon();
}
}