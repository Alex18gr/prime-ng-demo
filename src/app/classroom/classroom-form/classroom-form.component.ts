import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Classroom } from 'src/app/models/classroom.model';
import { ClassroomService } from '../classroom.service';

@Component({
  selector: 'app-classroom-form',
  templateUrl: './classroom-form.component.html',
  styleUrls: ['./classroom-form.component.scss']
})
export class ClassroomFormComponent implements OnInit {
  @Output() classrooomSaved: EventEmitter<Classroom> = new EventEmitter();
  displayDialog: boolean = false;
  classroomForm: FormGroup;
  currentClassroom: Classroom;
  title: string = '';
  editMode: boolean = false;
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

  openEditDialog(classroom: Classroom) {
    this.classroomForm.reset();
    this.editMode = true;
    this.currentClassroom = classroom;
    this.classroomForm.setValue({
      name: classroom.name
    });
    this.title = 'Edit Classroom'
    this.displayDialog = true;
  }

  openCreateDialog() {
    this.classroomForm.reset();
    this.editMode = false;
    this.title = 'Create new Classroom';
    this.displayDialog = true;
  }

  hideDialog() {
    this.currentClassroom = null;
    this.editMode = false;
    this.savingData = false;
    this.displayDialog = false;
  }

  formTouchedCondition(control: AbstractControl) {
    return control.invalid && (control.dirty || control.touched);
  }

  isInvalidControlCondition(control: AbstractControl) {
    return control.invalid && this.formTouchedCondition(control);
  }

  saveClassroom() {
    if (this.classroomForm.valid) {
      if (this.editMode) {
        this.updateClassroom();
      } else {
        this.createNewClassroom();
      }
    }
  }

  private createNewClassroom() {
    this.savingData = true;
    this.classroomService.saveClassroom(new Classroom(null, this.classroomForm.value.name, null))
      .subscribe((savedClassroom) => {
        console.log('classroom saved');
        this.classrooomSaved.emit(savedClassroom);
        this.hideDialog();
      }, error => {
        console.log('error saving classroom')
      }, () => {
        this.savingData = false;
      });
  }

  private updateClassroom() {
    this.savingData = true;
    this.classroomService.updateClassroom(new Classroom(this.currentClassroom.id, this.classroomForm.value.name, null))
      .subscribe((savedClassroom) => {
        console.log('classroom saved');
        this.classrooomSaved.emit(savedClassroom);
        this.hideDialog();
      }, error => {
        console.log('error saving classroom')
      }, () => {
        this.savingData = false;
      });
  }

}
