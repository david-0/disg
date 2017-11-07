import {Component, OnInit, Input} from '@angular/core';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() title: string;
  @Input() backLink: string;

  constructor() {
  }

  ngOnInit() {
    if (isNullOrUndefined(this.backLink)) {
      this.backLink = '..';
    }
  }
}
