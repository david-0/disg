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
        new Message('bleibt gerne an einem festen Arbeitsplatz'),
        new Message('vermittelnd, beruhigt andere Menschen'),
        new Message('konzentiert sich auf die Aufgaben'),
        new Message('schafft ein stabiles, beständiges Umfeld'),
        new Message('hält akzeptierte Arbeitsabläufe ein'),
        new Message('entwickelt spezialisiertes Können'),
        new Message('hört ruhig, gut und geduldig zu'),
      ]),
        new DetailBlock('Ideales Umfeld für "Stetige"', [
          new Message('echte, ernsthafte Wertschätzung'),
          new Message('möglichst keine Konfliktsituationen'),
          new Message('Anerkennung für geleistet Arbeit'),
          new Message('festes, abgegrenztes Aufgabengebiet'),
          new Message('Begründung für Veränderungen'),
          new Message('geregelte, geordnete Vorgehensweise'),
          new Message('Gelegenheiten für persönlichen Ausstausch'),
        ])]));
    this.blocks.push(new Block('Engpässe',
      [new DetailBlock('Mögliche Schwächen', [
        new Message('befürchtet Veränderungen'),
        new Message('unter Druck keine Termintreue'),
        new Message('ist zu nachsichtig und tolerant'),
        new Message('unentschlossen, mangelnde Initiative'),
        new Message('schiebt Dinge lange vor sich her'),
        new Message('stellt eigene Wünsche zu sehr zurück'),
        new Message('zu stark von Beziehungen abhängig'),
      ]),
        new DetailBlock('"S"-braucht andere, die', [
          new Message('neue Herausforderungen annehmen'),
          new Message('Hilfe bei schwierigen Problemen bieten'),
          new Message('schnell auf Veränderungen reagieren'),
          new Message('Unvorhergesehenes bewältigen können'),
          new Message('Aufgaben delegieren'),
          new Message('Initiative zeigen, Neues initiieren'),
          new Message('Unangenehmes direkt angehen'),
        ])]));
  }


  ngOnInit() {
  }

}
