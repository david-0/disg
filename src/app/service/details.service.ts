import {Injectable} from '@angular/core';
import {isNullOrUndefined} from 'util';

@Injectable()
export class DetailsService {

  constructor() {
  }

  public saveState(key: string, blocks: Block[]) {
    const result: boolean[][] = [];
    blocks.forEach(b => {
      b.blocks.forEach(d => {
        const states: boolean[] = [];
        d.messages.forEach(m => {
          states.push(m.checked);
        });
        result.push(states);
      });
    });
    localStorage.setItem(key, JSON.stringify(result));
  }

  public loadValues(key: string): boolean[][] {
    const item = localStorage.getItem(key);
    if (isNullOrUndefined(item)) {
      return null;
    }
    return JSON.parse(item);
  }

  public loadState(key: string, blocks: Block[]) {
    const item = localStorage.getItem(key);
    if (isNullOrUndefined(item)) {
      return;
    }
    const state: boolean[][] = JSON.parse(item);;
    for (let i = 0; i < blocks.length; i++) {
      const detailBlocks = blocks[i].blocks;
      for (let j = 0; j < detailBlocks.length; j++) {
        const detailBlock = detailBlocks[j];
        const states = state[i * 2 + j];
        for (let k = 0; k < detailBlock.messages.length; k++) {
          detailBlock.messages[k].checked = states[k];
        }
      }
    }
  }
}

export class Block {
  constructor(public title: String, public blocks: DetailBlock[]) {
  }
}

export class DetailBlock {
  constructor(public title: String, public messages: Message[]) {
  }
}

export class Message {
  public checked = false;

  constructor(public text: String) {
  }
}
