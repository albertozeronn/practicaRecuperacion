import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';
import { Character } from '../interfaces/character';
import { Location } from "@angular/common";
import { Book } from '../interfaces/book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.sass']
})
export class CharacterDetailComponent {
  public selectedCharacter: Character | undefined;
  public books: Book[] = [];
  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private bookService: BooksService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id')?.toString() || '';
    this.characterService.getCharacterById(id).subscribe(character => {
      this.selectedCharacter = character;
      character.books.forEach(bookUrl => {
        this.bookService.getBookByUrl(bookUrl).subscribe(book => {
          this.books?.push(book);
        })
      });
      
    });
  }

  public goBack(): void {
    this.location.back();
  }
}
