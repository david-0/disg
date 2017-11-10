import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class VoteService {
//  private url: string = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;
  private url: string = window.location.protocol + '//' + window.location.hostname + ':' + 3000;
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  sendMessage(message: string) {
    this.socket.emit('add', message);
  }

  clearMessage() {
    this.socket.emit('clear', '');
  }

  getAllMessage() {
    this.socket.emit('getAll', '');
  }

  removeMessage(message: string) {
    this.socket.emit('remove', message);
  }

  getMessages(): Observable<string[]> {
    const observable = new Observable<string[]>(observer => {
      this.socket.on('messages', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
}
