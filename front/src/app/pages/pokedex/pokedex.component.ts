import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  @ViewChild('collapsibleRef') collapsibleRef;
  pokemons: any;
  pokemonPage: Array<any>;
  pokemonDetails: any;
  isColapActive: boolean;
  currentPage: number;

  constructor(
    private pokeApiService: PokeApiService,
    private router: Router,
    private route: ActivatedRoute) {
      this.pokemonPage = [];
      this.pokemonDetails = '';
      this.isColapActive = false;
      this.currentPage = 1;
  }

  ngOnInit() {
    // pegando todos os pokemons da api
    this.pokeApiService.getAllPokemons().subscribe(
      (res) => {
        this.pokemons = res;
        for (let i = 0; i < 10; i++) {
          this.pokemonPage.push(this.pokemons.results[i]);
        }
      }
    );
    /* pegando os detalhes do pokémon a partir do que é passado na rota (isso acontece toda vez
      que a rota é atualizada) */
    this.route.queryParams.subscribe(params => {
      this.pokeApiService.getPokemonDetails(params['pokemon']).subscribe(
        (res) => {
          this.pokemonDetails = res;
          if (!this.isColapActive) {
            console.log('hello');
            this.pokemonPage.map(pokemon => {
              if (!(pokemon.name === this.pokemonDetails.name)) {
                console.log(this.pokemonDetails.id % 10);
              }
            });
          }
        });
    });
  }

  // repaginando os pokemons de acordo com a página que está
  onPageChange(pageNumber) {
    this.currentPage = pageNumber;
    let repage = (pageNumber * 10) - 10;
    this.pokemonPage = [];
    for (let i = 0; i < 10 && this.pokemons.results[repage]; i++, repage++) {
      this.pokemonPage.push(this.pokemons.results[repage]);
    }
  }

  // pegando o pokemon que foi clicado e passando por query param seu nome
  collapsible() {
    this.collapsibleRef.items._results.map(
      (elem, index) => {
        if (elem.childrenElement[0].className === 'active') {
          this.isColapActive = true;
          this.router.navigate(['/pokedex'], {
            queryParams: {
              pokemon: this.pokemonPage[index].name
            }
          });
        } else {
          this.isColapActive = false;
        }
      }
    );
  }

}
