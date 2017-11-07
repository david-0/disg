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
        new Message('knüpft Kontakte, unterhält andere'),
        new Message('schafft motivierende Atomsphäre'),
        new Message('versprüht Optimismus, Begeisterung'),
        new Message('steht gerne im Mittelpunkt'),
        new Message('arbeitet gerne in einer Gruppe'),
        new Message('drückt sich gut und klar aus'),
        new Message('teilt Gefühle anderen offen mit'),
      ]),
        new DetailBlock('Ideales Umfeld für "Initiative"', [
          new Message('freundliche, angenehme Atomsphäre'),
          new Message('Befreiung von Detailarbeit und Kontrolle'),
          new Message('Gelegenheit, Vorschläge zu machen'),
          new Message('öffentliche Anerkennung der Fähigkeiten'),
          new Message('gemeinsame Aktivitäten in der Freizeit'),
          new Message('Schulung und Beratung anderer'),
          new Message('freie Meinungsäusserung, Unterstützung'),
        ])]));
    this.blocks.push(new Block('Engpässe',
      [new DetailBlock('Mögliche Schwächen', [
        new Message('tendiert dazu, Dinge nicht konsequent zu Ende zu bringen'),
        new Message('Subjektivität bei Entscheidungen'),
        new Message('kann ergebnisse zu optimistisch einschätzen'),
        new Message('tendiert dazu, zu viel zu reden, handelt zu impulsiv'),
        new Message('versucht, zuviel auf einmal zu tun'),
        new Message('mag es nicht, allein sein zu müssen'),
        new Message('hat unbegründete Angst vor Ablehung'),
      ]),
        new DetailBlock('"I"-braucht andere, die', [
          new Message('sich auf eine Aufgabe konzentrieren'),
          new Message('Routine und Detailaufgaben erledigen'),
          new Message('aufrichtig, direkt und sachlich reden'),
          new Message('sich an Zahlen und Fakten orientieren'),
          new Message('systematisch und geplant arbeiten'),
          new Message('Dinge statt Menschen bevorzugen'),
          new Message('Vorgänge abarbeiten und kontrollieren'),
        ])]));
  }

  ngOnInit() {
  }

}
