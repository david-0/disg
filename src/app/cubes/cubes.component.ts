import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cubes',
  templateUrl: './cubes.component.html',
  styleUrls: ['./cubes.component.scss']
})
export class CubesComponent implements OnInit {

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
