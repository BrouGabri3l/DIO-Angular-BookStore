import { Component, OnInit } from '@angular/core';
import { BookCategory } from '../../enums/book-category';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  bookCategories: string[] = Object.keys(BookCategory)
  _filteredBooks?: Book[]
  _filterBy?: number
  bookList: Book[] = [
    {
      id: 1,
      title: "Memórias póstumas de brás cubas",
      price: 45.99,
      quantity: 7,
      category: Object.keys(BookCategory).indexOf("Romance"),
      image: "assets/img/Capa.jpg"
    }
  ]

  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks()
  }
  getBooks() {
    this._bookService.getBooks().subscribe(books => {
      this.bookList = books
      this._filteredBooks = this.bookList
    })

  }
  getFiltered(value: string) {
    console.log(value.length)
    value.length === 0 ? this._filteredBooks = this.bookList : this._filteredBooks = this.bookList.filter((book: Book) => book.category === Object.keys(BookCategory).indexOf(value))
  }
}
