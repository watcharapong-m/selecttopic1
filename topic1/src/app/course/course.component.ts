import { Component, OnInit } from '@angular/core';
import { Course } from '../model/crouse';
import { CROUSE } from '../mock/mock-course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['../app.component.scss']
  // styleUrls: ['./score.component.scss']
})
export class CourseComponent implements OnInit {

  title = 'Course';
  course: Course[] = CROUSE;

  constructor() { }

  ngOnInit(): void {
  }

}
