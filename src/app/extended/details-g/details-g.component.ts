import {Component, OnInit} from '@angular/core';
import {DetailBlock, Block, Message} from '../../service/details.service';

@Component({
  selector: 'app-details-g',
  templateUrl: './details-g.component.html',
  styleUrls: ['./details-g.component.scss']
})
export class DetailsGComponent implements OnInit {
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
        new DetailBlock('Ideales Umfeld für "Gewissenhafte"', [
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
        new DetailBlock('"G"-braucht andere, die', [
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
