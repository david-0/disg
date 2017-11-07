import { Component, OnInit } from '@angular/core';
import {Message, DetailBlock, Block} from '../../service/details.service';

@Component({
  selector: 'app-details-s',
  templateUrl: './details-s.component.html',
  styleUrls: ['./details-s.component.scss']
})
export class DetailsSComponent implements OnInit {

  public blocks: Block[] = [];

  constructor() {
    this.blocks.push(new Block('Stärken',
      [new DetailBlock('Verhaltenstendenzen', [
        new Message(''),
        new Message(''),
        new Message(''),
        new Message(''),
        new Message(''),
        new Message(''),
        new Message(''),
      ]),
        new DetailBlock('Ideales Umfeld für "Stetige"', [
          new Message(''),
          new Message(''),
          new Message(''),
          new Message(''),
          new Message(''),
          new Message(''),
          new Message(''),
        ])]));
    this.blocks.push(new Block('Engpässe',
      [new DetailBlock('Mögliche Schwächen', [
        new Message(''),
        new Message(''),
        new Message(''),
        new Message(''),
        new Message(''),
        new Message(''),
        new Message(''),
      ]),
        new DetailBlock('"S"-braucht andere, die', [
          new Message(''),
          new Message(''),
          new Message(''),
          new Message(''),
          new Message(''),
          new Message(''),
          new Message(''),
        ])]));
  }


  ngOnInit() {
  }

}
