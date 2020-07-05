import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

interface ArticleType {
  id: number;
  href: string;
  title: string;
  date: string;
  author: string;
  category: string;
  'category-link': string;
  summary: string;
}
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() i = 0;
  @Input() item: ArticleType;
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  doDelete(): void {
    this.delete.emit(this.item.id);
  }
}

