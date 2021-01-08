import { WordType } from './../database/models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent {

  @Input() title = '';
  @Input() words: WordType[] = [];

}
