import { Component, OnInit, ViewChild } from '@angular/core';
import { Classroom } from 'src/app/models/classroom.model';
import { ClassroomService } from '../classroom.service';
import { faSleigh } from '@fortawesome/free-solid-svg-icons';
import { ClassroomFormComponent } from '../classroom-form/classroom-form.component';
import { ClassroomDeleteDialogComponent } from '../classroom-delete-dialog/classroom-delete-dialog.component';

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.scss']
})
export class ClassroomsComponent implements OnInit {
  @ViewChild('classroomForm', {static: false}) classroomFormElement: ClassroomFormComponent;
  @ViewChild('deleteClassroomDialog', {static: false}) deleteClassroomDialog: ClassroomDeleteDialogComponent;
  classrooms: Classroom[];
  createNewClassroomDialogOpen: boolean = false;

  constructor(private classroomService: ClassroomService) { }

  ngOnInit(): void {
    this.getClassroomData();
  }

  getClassroomData() {
    this.classroomService.getClassrooms().subscribe((classroomsData: Classroom[]) => {
      this.classrooms = classroomsData;
    });
  }

  createNewClassroom() {
    this.classroomFormElement.openCreateDialog();
  }

  onEditClassroom(classroom: Classroom) {
    this.classroomFormElement.openEditDialog(classroom);
  }

  onDeleteClassroom(classroom: Classroom) {
    this.deleteClassroomDialog.openDeleteDialog(classroom);
  }

}
