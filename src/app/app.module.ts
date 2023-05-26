import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { HttpClientModule } from "@angular/common/http";
import { HousesComponent } from './houses/houses.component';
import { BooksComponent } from './books/books.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    HousesComponent,
    BooksComponent,
    CharacterDetailComponent,
    BookDetailComponent,
    HouseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
