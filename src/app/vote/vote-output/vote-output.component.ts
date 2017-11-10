import {Component, OnInit, OnDestroy} from '@angular/core';
import {VoteService} from '../service/vote.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-vote-output',
  templateUrl: './vote-output.component.html',
  styleUrls: ['./vote-output.component.scss']
})
export class VoteOutputComponent implements OnInit, OnDestroy {
  public messages: string[] = [];
  public subscription: Subscription;

  constructor(public voteService: VoteService) {
  }

  ngOnInit() {
    this.subscription = this.voteService.getMessages().subscribe(messages => {
      this.messages = messages;
    });
    this.voteService.getAllMessage();
  }

  clear() {
    this.voteService.clearMessage();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  remove(message: string) {
    this.voteService.removeMessage(message);
  }
}
