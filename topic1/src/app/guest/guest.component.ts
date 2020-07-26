import { Component, OnInit } from '@angular/core';

import { Student } from '../model/student';
import { STUDENTS } from '../mock/mock-student';

import { Course } from '../model/crouse';
import { CROUSE } from '../mock/mock-course';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['../app.component.scss']
})
export class GuestComponent implements OnInit {

  title1 = 'หลักสูตร';
  course: Course[] = CROUSE;

  title2 = 'รายชื่อนักศึกษา';
  students: Student[] = STUDENTS;

  constructor() { }

  ngOnInit(): void {
  }

}
