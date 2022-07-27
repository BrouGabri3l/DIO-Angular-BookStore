import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = "https://localhost:44321/api/books"
  constructor(private _httpService: HttpClient) { }
  getBooks(): Observable<Book[]> {
    return this._httpService.get<Book[]>(this.apiUrl)
  }
}
