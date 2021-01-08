import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { WordsService } from './../../services/words.service';
import { WordType } from './../database/models';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {

  subscription = new Subscription();
  word: undefined |  WordType;

  constructor(
    private wordsService: WordsService
  ) { }

  ngOnInit(): void {
    this.fetchWord();
  }

  addToNouns(word: WordType): void {
    this.wordsService.addNouns(word);
    this.fetchWord();
  }

  addToVerbs(word: WordType): void {
    this.wordsService.addVerbs(word);
    this.fetchWord();
  }

  private fetchWord(): void {
    this.subscription = this.wordsService.getWords().subscribe(
      (array: WordType[]) => {
        this.word = array.shift();
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
