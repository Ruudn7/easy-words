import { WordType } from './components/database/models';
import { WordsService } from './services/words.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private wordsService: WordsService
  ) {}

  get nouns(): WordType[] {
    return this.wordsService.getNouns();
  }

  get verbs(): WordType[] {
    return this.wordsService.getVerbs();
  }
}
