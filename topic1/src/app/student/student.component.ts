import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { STUDENTS } from '../mock/mock-student';

import { Course } from '../model/crouse';
import { CROUSE } from '../mock/mock-course';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['../app.component.scss']
  // styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  title1 = 'รายชื่อนักศึกษา';
  students: Student[] = STUDENTS;
  title2 = 'หลักสูตร';
  course: Course[] = CROUSE;

  constructor() { }

  ngOnInit(): void {
  }

}
