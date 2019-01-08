import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit, OnChanges {

  @Input() pokemonDetails;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.pokemonDetails);
  }

}
