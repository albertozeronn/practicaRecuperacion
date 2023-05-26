import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';
import { Book } from '../interfaces/book';
import { Location } from "@angular/common";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.sass']
})
export class BookDetailComponent {
  public selectedBook: Book | undefined;
  public totalCharacters: number | undefined;
  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService,
    private location: Location,
  ) { }
  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id')?.toString() || '';
    console.log(id)
    this.bookService.getBookById(id).subscribe(book => {
      this.selectedBook = book;
      this.totalCharacters = book.characters.length
    });
  }

  public goBack(): void {
    this.location.back();
  }
}
