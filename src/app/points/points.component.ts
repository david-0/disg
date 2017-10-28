import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})
export class PointsComponent implements OnInit {

  @Input() selected: number;
  @Output() onChange = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  myChange(points: number) {
    this.selected = points;
    this.onChange.emit(points);
  }
}
