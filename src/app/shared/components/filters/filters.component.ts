import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookCategory } from '../../enums/book-category';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() bookCategories: string[] = []
  @Output() filterEvent = new EventEmitter<string>()
  selectedValue: string = ""
  constructor() { }

  ngOnInit(): void {
  }
  filterRequest(value: string) {
    this.filterEvent.emit(value)
  }
}
