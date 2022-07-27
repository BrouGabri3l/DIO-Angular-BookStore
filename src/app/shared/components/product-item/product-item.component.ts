import { Component, Input, OnInit } from '@angular/core';
import { BookCategory } from '../../enums/book-category';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() book!: Book
  constructor() { }

  ngOnInit(): void {
  }

}
