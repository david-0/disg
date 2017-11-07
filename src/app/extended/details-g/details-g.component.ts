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
        new Message('folgt Anweisungen und Normen'),
        new Message('konzentriert sich auf Details'),
        new Message('geht diplomatisch mit Menschen um'),
        new Message('denkt kritisch und prüft Genauigkeit'),
        new Message('akzeptiert Autoritäten bereitwillig'),
        new Message('arbeitet unter geregelten Bedingungen'),
        new Message('entscheidet analytisch, nachdem er alle Daten gesammelt und bewertet hat'),
      ]),
        new DetailBlock('Ideales Umfeld für "Gewissenhafte"', [
          new Message('eine genaue Aufgabenbeschreibung'),
          new Message('genügent Zeit zur Aufgabenerledigung'),
          new Message('Gelegenheit zur sachlichen Kritik'),
          new Message('Nachfrage nach Detail-/Qualitätsarbeit'),
          new Message('Beibehaltung bewährter Verfahren'),
          new Message('Vorbereitung auf Veränderungen'),
          new Message('Bestätigung auf Sicherheitsgarantien'),
        ])]));
    this.blocks.push(new Block('Engpässe',
      [new DetailBlock('Mögliche Schwächen', [
        new Message('verstrickt sich in Einzelheiten'),
        new Message('nicht loslassen und delegieren'),
        new Message('richtet sich genau nach Vorschriften'),
        new Message('befürchtet, Fehler zu machen'),
        new Message('zögert, neue Dinge auszuprobieren'),
        new Message('ist empfindsam bei persönlicher Kritik'),
        new Message('denkt zu vorsichtig und pessimistisch'),
      ]),
        new DetailBlock('"G"-braucht andere, die', [
          new Message('schnelle Entscheidungen treffen'),
          new Message('Überzeugungsarbeit leisten'),
          new Message('Optimismus zeigen und ausstrahlen'),
          new Message('wichtige Aufgaben gründlich erarbeitet haben wollen'),
          new Message('unpopuläre Standpunkte aussprechen'),
          new Message('kompromissfähig und flexibel sind'),
          new Message('Anweisungen nur als Richtlinien'),
        ])]));
  }

  ngOnInit() {
  }

}
