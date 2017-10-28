import {Injectable} from '@angular/core';
import {Question} from '../model/question';
import {Statement} from '../model/statement';

@Injectable()
export class QuestionService {

  private _questions: Question[] = [];

  constructor() {
    this._questions.push(new Question(1, [
      new Statement('i', 'optimistisch'),
      new Statement('d', 'selbstsicher'),
      new Statement('g', 'genau'),
      new Statement('s', 'harmonisch')]));
    this._questions.push(new Question(2, [
      new Statement('g', 'nachdenkend'),
      new Statement('i', 'kontaktfreudig'),
      new Statement('s', 'zuhörend'),
      new Statement('d', 'wagemutig')]));
    this._questions.push(new Question(3, [
      new Statement('s', 'gedulig'),
      new Statement('i', 'spontan'),
      new Statement('d', 'entscheidungfreudig'),
      new Statement('g', 'kontrolliert')]));
    this._questions.push(new Question(4, [
      new Statement('d', 'bestimmend'),
      new Statement('g', 'sorgfältig'),
      new Statement('s', 'teamfähig'),
      new Statement('i', 'begeistert')]));
    this._questions.push(new Question(5, [
      new Statement('s', 'vertrauensvoll'),
      new Statement('g', 'analytisch'),
      new Statement('i', 'beliebt'),
      new Statement('d', 'kraftvoll')]));
    this._questions.push(new Question(6, [
      new Statement('d', 'ergebinsorientiert'),
      new Statement('s', 'beständig'),
      new Statement('i', 'enthusiastisch'),
      new Statement('g', 'selbstdiszipliniert')]));
    this._questions.push(new Question(7, [
      new Statement('i', 'positiv'),
      new Statement('d', 'risikofreudig'),
      new Statement('g', 'zurückhaltend'),
      new Statement('s', 'unterstützend')]));
    this._questions.push(new Question(8, [
      new Statement('g', 'kritisch'),
      new Statement('i', 'impulsiv'),
      new Statement('s', 'zuverlässig'),
      new Statement('d', 'zielorientiert')]));
    this._questions.push(new Question(9, [
      new Statement('i', 'gesellig'),
      new Statement('s', 'unauffällig'),
      new Statement('d', 'furchtos'),
      new Statement('g', 'struktuiert')]));
    this._questions.push(new Question(10, [
      new Statement('d', 'hartnäckig'),
      new Statement('i', 'überzeugend'),
      new Statement('g', 'planend'),
      new Statement('s', 'vermittelnd')]));
  }

  get questions(): Question[] {
    return this._questions;
  }
}
