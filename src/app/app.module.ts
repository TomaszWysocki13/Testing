import { BrowserModule }         from '@angular/platform-browser';
import { NgModule }              from '@angular/core';
import { HttpModule }            from '@angular/http';
import { FormsModule }           from '@angular/forms';

import { AppComponent }          from './app.component';
import { AppRoutingModule }      from './app-routing.module';

import { PokemonService }        from './pokemon.service';
import { DetailsComponent }      from './details/details.component';
import { ListComponent }         from './list/list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CapitalizePipe } from './capitalize.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    DetailsComponent,
    ListComponent,
    PageNotFoundComponent,
    CapitalizePipe,
    SearchPipe,
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
