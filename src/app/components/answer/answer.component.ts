import { Component, Input } from '@angular/core';

import { WordType } from './../database/models';

@Component({
  selector: 'app-answers',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent {

  @Input() title = '';
  words: WordType[] = [];

  @Input() set word(word: WordType | null) {
    if (word) {
      this.words.push(word);
    }
  }

}
