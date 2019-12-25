import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { RequestBody } from './models/request';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data: RequestBody;
  constructor(private el: ElementRef) {
    this.data = this.getData();
  }

  private getData(): RequestBody {
    return JSON.parse(this.el.nativeElement.getAttribute('data'));
  }
}
