import { Component, Input } from '@angular/core';
import { Book } from '../interfaces/book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent {

  public books: Book[] = [];
  @Input() page: number = 0;
  @Input() pageSize: number = 20;

  constructor(
    private booksService: BooksService,
  ) {
  }

  ngOnInit(): void {
    //obtenemos los
    //this.heroes = this.heroService.getHeroes();
    this.getBooks();
  }
  public getBooks(): void {
    this.booksService.getAllBooks(this.page, this.pageSize).subscribe(books => {
      this.books = books;
      });
  }

  public previousPage(): void {
    this.page -= this.pageSize;
    this.getBooks();
  }

  public nextPage(): void {
    this.page += this.pageSize;
    this.getBooks();
  }
}
