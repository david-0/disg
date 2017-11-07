import {Component, OnInit} from '@angular/core';
import {Message, DetailBlock, Block, DetailsService} from '../../service/details.service';

@Component({
  selector: 'app-details-d',
  templateUrl: './details-d.component.html',
  styleUrls: ['./details-d.component.scss']
})
export class DetailsDComponent implements OnInit {

  public blocks: Block[] = [];

  constructor() {
    this.blocks.push(new Block('Stärken',
      [new DetailBlock('Verhaltenstendenzen', [
        new Message('übernimmt das Kommando'),
        new Message('veranlasst Dinge und bringt sie ins Rollen'),
        new Message('zielt auf sofortige Ergebnisse'),
        new Message('trifft schnelle Entscheidungen'),
        new Message('nimmt Herausforderungen an'),
        new Message('stellt bestehende Zustände in Frage'),
        new Message('packt Probleme geradewegs an'),
      ]),
        new DetailBlock('Ideales Umfeld für "Dominante"', [
          new Message('eine starke, einflussreiche Position'),
          new Message('neue, abwechslungsreiche Aufgaben'),
          new Message('viel Bewegungsfreiheit bei der Arbeit'),
          new Message('direkte Antworten, wenig Diskussion'),
          new Message('Herausforderungen und Ansehen'),
          new Message('wenig Kontrolle und Beaufsichtigung'),
          new Message('Gelegenheit zu persönlichen Erfolgen'),
        ])]));
    this.blocks.push(new Block('Engpässe',
      [new DetailBlock('Mögliche Schwächen', [
        new Message('tendiert zur fehlenden Sensibilität gegenüber Gefühlen anderer'),
        new Message('übersieht Risiken und Warnungen'),
        new Message('stellt zu hohe Ansprüche an andere'),
        new Message('verursacht Schwierigkeiten in Teams'),
        new Message('nimmt sich zu viel auf einmal vor'),
        new Message('tendiert dazu, wichtige Details zu vernachlässigen'),
        new Message('übertreibt die Kontrolle von Menschen'),
      ]),
        new DetailBlock('"D"-braucht andere, die', [
          new Message('Routine-Arbeiten gerne erledigen'),
          new Message('besonnen mit Vorsicht handeln'),
          new Message('auf Details und Fakten achten'),
          new Message('das Für und Wider gegenüberstellen'),
          new Message('Risiken abschätzen und berechnen'),
          new Message('Grundlagen erforschen, Details prüfen'),
          new Message('sichere Entscheidungen'),
        ])]));
  }

  ngOnInit() {
  }
}

