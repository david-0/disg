import {Component, OnInit} from '@angular/core';
import {VoteService} from '../service/vote.service';

@Component({
  selector: 'app-vote-input2',
  templateUrl: './vote-input2.component.html',
  styleUrls: ['./vote-input2.component.scss']
})
export class VoteInput2Component {

  public msg: string;

  constructor(private voteService: VoteService) {
  }

  public send() {
    if (this.msg && this.msg.length > 0) {
      this.voteService.sendMessage(this.msg);
      this.msg = '';
    }
  }

  public kom() {
    this.voteService.sendMessage('Kommunikationfähigkeit');
  }

  public tea() {
    this.voteService.sendMessage('Teamfähigkeit');
  }

  public kri() {
    this.voteService.sendMessage('Umgang mit kritischen Situationen');
  }

  public ver() {
    this.voteService.sendMessage('Verantwortungsbewusstsein');
  }

  public sel() {
    this.voteService.sendMessage('Selbstbewusstsein');
  }
}
