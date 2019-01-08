import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MzNavbarModule } from 'ngx-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { PokedexModule } from './pages/pokedex/pokedex.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    PokedexModule,
    MzNavbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
