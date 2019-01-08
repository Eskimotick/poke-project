import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MzPaginationModule, MzCollapsibleModule, MzSpinnerModule, MzBadgeModule } from 'ngx-materialize';

import { PokedexComponent } from './pokedex.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

import { PokeApiService } from '../../services/poke-api.service';

@NgModule({
  declarations: [
    PokedexComponent, 
    PokemonDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MzPaginationModule,
    MzCollapsibleModule,
    MzSpinnerModule,
    MzBadgeModule
  ],
  providers: [PokeApiService]
})
export class PokedexModule { }
