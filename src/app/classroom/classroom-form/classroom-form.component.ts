import { Component, OnInit, Input } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Classroom } from 'src/app/models/classroom.model';

@Component({
  selector: 'app-classroom-form',
  templateUrl: './classroom-form.component.html',
  styleUrls: ['./classroom-form.component.scss']
})
export class ClassroomFormComponent implements OnInit {
  displayDialog: boolean = false;
  classroomForm: FormGroup;
  currentClassroom: Classroom;
  title: string = '';

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.classroomForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }

  openEditDialog(classroom: Classroom) {
    this.classroomForm.reset();
    this.classroomForm.setValue({
      name: classroom.name
    });
    this.title = 'Edit Classroom'
    this.displayDialog = true;
  }

  openCreateDialog() {
    this.classroomForm.reset();
    this.title = 'Create new Classroom';
    this.displayDialog = true;
  }

  hideDialog() {
    this.currentClassroom = null;
    this.displayDialog = false;
  }

  formTouchedCondition(control: AbstractControl) {
    return control.invalid && (control.dirty || control.touched);
  }

  isInvalidControlCondition(control: AbstractControl) {
    return control.invalid && this.formTouchedCondition(control);
  }

}
