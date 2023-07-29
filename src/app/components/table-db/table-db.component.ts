import { Component, Input, OnInit } from '@angular/core';
import { BookDto } from "../../models/books.model";

@Component({
  selector: 'app-table-db',
  templateUrl: './table-db.component.html',
  styleUrls: ['./table-db.component.scss'],
})
export class TableDBComponent  implements OnInit {

  @Input() books: BookDto[] = [];
  @Input() book!: BookDto;
  constructor() { }

  ngOnInit() {}

}