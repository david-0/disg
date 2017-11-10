import {Component} from '@angular/core';
import {VoteService} from '../service/vote.service';

@Component({
  selector: 'app-vote-input',
  templateUrl: './vote-input.component.html',
  styleUrls: ['./vote-input.component.scss']
})
export class VoteInputComponent {

  public msg: string;

  constructor(private voteService: VoteService) {
  }

  public send() {
    if (this.msg && this.msg.length > 0) {
      this.voteService.sendMessage(this.msg);
      this.msg = '';
    }
  }
}
