import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomDeleteDialogComponent } from './classroom-delete-dialog.component';

describe('ClassroomDeleteDialogComponent', () => {
  let component: ClassroomDeleteDialogComponent;
  let fixture: ComponentFixture<ClassroomDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassroomDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
