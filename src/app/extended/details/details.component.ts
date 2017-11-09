import {
  Component, OnInit, Input, ElementRef, ViewChild, Renderer2, AfterViewChecked,
  ViewChildren, QueryList
} from '@angular/core';
import {Block, DetailsService} from '../../service/details.service';
import {MatCard} from '@angular/material';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, AfterViewChecked {

  @Input() type: string;
  @Input() key: string;
  @Input() className: string;
  @Input() blocks: Block[];

  // get the ElementRef and not the MatCard Object itself
  @ViewChildren('card', { read: ElementRef }) cards: QueryList<ElementRef>;

  constructor(private detailService: DetailsService, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.detailService.loadState(this.key, this.blocks);
  }

  onChange() {
    this.detailService.saveState(this.key, this.blocks);
  }

  ngAfterViewChecked(): void {
    this.cards.toArray().forEach(c => {
      this.renderer.addClass(c.nativeElement, this.className);
    });
  }
}
