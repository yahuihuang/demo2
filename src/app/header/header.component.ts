import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() sitename = '換網站名稱';
  subtitle = '記載著 Will 在網路世界的學習心得與技術分享';
  fontsize = 12;
  constructor() { }

  ngOnInit(): void {
    /*setTimeout(() => {
      this.sitename = "這是我的測試網站";
    }, 2000);*/
  }

  changeSitename(eventData: MouseEvent): void {
    console.log(eventData);
    this.fontsize += 1;
    if (eventData.ctrlKey === true) {
      this.sitename = '這是我的測試網站';
    }
  }
}
