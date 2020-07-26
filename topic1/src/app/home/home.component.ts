import { Component, OnInit } from '@angular/core';

import {Student} from '../model/student';
import {STUDENTS} from '../mock/mock-student';

import {Lecturer} from '../model/lectuere';
import {LECTURER} from '../mock/mock-lecturer';

import {Score} from '../model/score';
import {SCORE} from '../mock/mock-score';

import {Course} from '../model/crouse';
import {CROUSE} from '../mock/mock-course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.scss']
  // styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Course Web Application and Mobile Application';
  descriptiion = 'คำอธิบายรายวิชา';
  students: Student[] = STUDENTS;
  lecturers: Lecturer[] = LECTURER;
  scores: Score[] = SCORE;
  courses: Course[] = CROUSE;

  constructor() { }

  ngOnInit(): void {
  }

}
