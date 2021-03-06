import {Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, Renderer2} from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent implements OnInit {

  @ViewChild('svg') svg: ElementRef;
  // range from 1-4
  @Input() points: number;
  @Input() selected: boolean;
  @Output() myClick = new EventEmitter<number>();

  private colorClasses = ['cube1-selected', 'cube2-selected', 'cube3-selected', 'cube4-selected'];
  public cubeDraw = true;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  myChange() {
    if (!this.selected) {
      this.myClick.emit(this.points);
    }
  }

  backgroundColor(selected: boolean) {
    const rect = this.svg.nativeElement.getElementsByTagName('rect')[0];
    if (selected) {
      this.renderer.addClass(rect, this.colorClasses[this.points - 1]);
      this.renderer.removeClass(rect, 'cube-not-selected');
    } else {
      this.renderer.addClass(rect, 'cube-not-selected');
      this.renderer.removeClass(rect, this.colorClasses[this.points - 1]);
    }
  }
}
