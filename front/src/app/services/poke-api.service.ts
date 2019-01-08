import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class PokeApiService {

  pokeApiUrl: string;

  constructor(private http: HttpClient) { 
    this.pokeApiUrl = 'https://pokeapi.co/api/v2/';
  }

  getAllPokemons(): Observable<any> {
    return this.http.get(this.pokeApiUrl + 'pokemon/').pipe(tap(res => res));
  }

  getPokemonDetails(param): Observable<any> {
    return this.http.get(this.pokeApiUrl + 'pokemon/' + param + '/').pipe(tap(res => res))
  }
}
