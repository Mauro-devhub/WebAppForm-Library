import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { BehaviorSubject, Observable, of, switchMap } from "rxjs";
import { BookDto } from "../models/books.model";

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  
  private http = inject(HttpClient);
  localhost: string = 'http://localhost:3000';

  subject$ = new BehaviorSubject<BookDto[]>([]);

  constructor() {
    this.getAllBooks().subscribe( books => {
      this.subject$.next(books);
    })
  }

  getAllBooks(): Observable<BookDto[]> {
    return this.http.get<BookDto[]>(`${this.localhost}/books`);
  }

  findOneBook(title: string): Observable<BookDto> {
    return this.http.get<BookDto>(`${this.localhost}/books/title=${title}`);
  }

  deleteOneBook(id: number) {
    return this.http.get<BookDto>(`${this.localhost}/books/delete/title=${id}`)
      .pipe(
        switchMap((book) => {
          this.getAllBooks().subscribe((books: BookDto[]) => {
            const booksArr: BookDto[] = books.filter( e => e.ID !== book.ID );
            this.subject$.next(booksArr);
          })
          return of(book);
        }
      )
    );
  }

  createOneBook(dataObj: BookDto): Observable<BookDto> {
    return this.http.post<BookDto>(`${this.localhost}/books/create`, dataObj)
      .pipe(
        switchMap((book) => {
          this.getAllBooks().subscribe((books: BookDto[]) => {
            const booksArr = [...books, book];
            this.subject$.next(booksArr);
          })
          return of(book);
        })
      );
  }
}