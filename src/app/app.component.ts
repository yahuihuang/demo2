import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo2';
  keyword = '請輸入';
  doSearch(str: string): void {
    this.keyword = str;
  }
}
