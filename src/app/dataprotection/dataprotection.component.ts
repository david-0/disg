import {Component, OnInit} from '@angular/core';
import {AnswerService} from '../service/answer.service';

@Component({
  selector: 'app-dataprotection',
  templateUrl: './dataprotection.component.html',
  styleUrls: ['./dataprotection.component.scss']
})
export class DataprotectionComponent implements OnInit {

  constructor(public answerService: AnswerService) { }

  ngOnInit() {
  }
}
