import { Component, OnInit } from '@angular/core';
import { Score } from '../model/score';
import { SCORE } from '../mock/mock-score';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['../app.component.scss']
  // styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  title = 'คะแนน';
  scores: Score[] = SCORE;

  constructor() { }

  ngOnInit(): void {
  }

}
