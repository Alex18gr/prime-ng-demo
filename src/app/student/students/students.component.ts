import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    // this.loadData();
  }

  // loadData() {
  //   this.studentService.getAllStudents().subscribe(data => {
  //     this.students = data;
  //   });
  // }

  display: boolean = false;

  showDialog() {
    this.display = true;
  }

}
