import { Component, OnInit } from '@angular/core';
import {Message, DetailBlock, Block} from '../../service/details.service';

@Component({
  selector: 'app-details-i',
  templateUrl: './details-i.component.html',
  styleUrls: ['./details-i.component.scss']
})
export class DetailsIComponent implements OnInit {

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
        new DetailBlock('Ideales Umfeld für "Initiative"', [
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
        new DetailBlock('"I"-braucht andere, die', [
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
