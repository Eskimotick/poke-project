import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokedexComponent } from './pages/pokedex/pokedex.component';

const routes: Routes = [
  { path: 'pokedex', component: PokedexComponent },
  { path: '', redirectTo: '/pokedex', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
