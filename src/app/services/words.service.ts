import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Type, WordType } from '../components/database/models';
import { WORDS } from './../components/database/data-base';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  words$ = new BehaviorSubject<WordType[]>([]);
  nouns$ = new Subject<WordType>();
  verbs$ = new Subject<WordType>();

  constructor() {
    setTimeout(() => {
      this.words$.next(WORDS);
    }, 0);
  }

  getWords(): BehaviorSubject<WordType[]> {
    return this.words$;
  }

  getNouns(): Observable<WordType> {
    return this.nouns$.asObservable().pipe(
      map(
        (word: WordType) => {
          word.correct = word.type === Type.NOUN;
          return word;
        }
      )
    );
  }

  getVerbs(): Observable<WordType> {
    return this.verbs$.asObservable().pipe(
      map(
        (word: WordType) => {
          word.correct = word.type === Type.VERB;
          return word;
        }
      )
    );
  }

  addNouns( value: WordType ): void {
      this.nouns$.next(value);
  }

  addVerbs( value: WordType ): void {
    this.verbs$.next(value);
  }

}
