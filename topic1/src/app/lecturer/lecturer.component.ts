import { Component, OnInit } from '@angular/core';
import { Lecturer } from '../model/lectuere';
import { LECTURER } from '../mock/mock-lecturer';

import { Course } from '../model/crouse';
import { CROUSE } from '../mock/mock-course';

import { Student } from '../model/student';
import { STUDENTS } from '../mock/mock-student';

import { Score } from '../model/score';
import { SCORE } from '../mock/mock-score';

@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['../app.component.scss']
  // styleUrls: ['./lecturer.component.scss']
})
export class LecturerComponent implements OnInit {

  title1 = 'รายชื่ออาจารย์';
  lecturers: Lecturer[] = LECTURER;
  title2 = 'หลักสูตร';
  course: Course[] = CROUSE;
  title3 = 'รายชื่อนักศึกษา';
  students: Student[] = STUDENTS;
  title4 = 'คะแนน';
  scores: Score[] = SCORE;

  constructor() { }

  ngOnInit(): void {
  }

}
