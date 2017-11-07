import {Component, OnInit, Input} from '@angular/core';
import {Block, DetailsService} from '../../service/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() type: string;
  @Input() key: string;
  @Input() blocks: Block[];

  constructor(private detailService: DetailsService) {
  }

  ngOnInit() {
    this.detailService.loadState(this.key, this.blocks);
  }

  onChange() {
    this.detailService.saveState(this.key, this.blocks);
  }
}
