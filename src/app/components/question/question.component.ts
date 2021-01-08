import { WordType } from './../database/models';
import { WordsService } from './../../services/words.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  word: undefined | WordType = {
    word: '',
    type: 0
  };

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

  check(): void {
    this.wordsService.check();
  }

  private fetchWord(): void {
    this.word = this.wordsService.getWords().shift();
  }

}
