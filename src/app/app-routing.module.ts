import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { HousesComponent } from './houses/houses.component';
import { BooksComponent } from './books/books.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'characterDetail/:id', component: CharacterDetailComponent },
  { path: 'houses', component: HousesComponent },
  { path: 'houseDetail/:id', component: HouseDetailComponent },
  { path: 'books', component: BooksComponent },
  { path: 'bookDetail/:id', component: BookDetailComponent },
  { path:'**', redirectTo: 'characters', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
