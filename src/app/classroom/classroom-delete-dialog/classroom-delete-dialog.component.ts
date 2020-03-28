import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Classroom } from 'src/app/models/classroom.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClassroomService } from '../classroom.service';

@Component({
  selector: 'app-classroom-delete-dialog',
  templateUrl: './classroom-delete-dialog.component.html',
  styleUrls: ['./classroom-delete-dialog.component.scss']
})
export class ClassroomDeleteDialogComponent implements OnInit {

  @Output() classroomDeleted: EventEmitter<any> = new EventEmitter();
  displayDialog: boolean = false;
  classroomForm: FormGroup;
  deleteClassroom: Classroom;
  title: string = 'Delete Classroom';
  savingData: boolean = false;

  constructor(private classroomService: ClassroomService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.classroomForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }

  openDeleteDialog(classroom: Classroom) {
    this.deleteClassroom = classroom;
    this.displayDialog = true;
  }

  hideDialog() {
    this.deleteClassroom = null;
    this.savingData = false;
    this.displayDialog = false;
  }

  deleteCurrentClassroom() {
    this.savingData = true;
    this.classroomService.deleteClassroom(this.deleteClassroom).subscribe(() => {
      this.classroomDeleted.emit();
      this.hideDialog();
    }, err => {
      
    }, () => {
      this.savingData = false;
    })
  }
}
