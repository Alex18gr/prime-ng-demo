import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Classroom } from 'src/app/models/classroom.model';

@Component({
  selector: 'app-classrooms-table',
  templateUrl: './classrooms-table.component.html',
  styleUrls: ['./classrooms-table.component.scss']
})
export class ClassroomsTableComponent implements OnInit {
  @Input() classrooms: Classroom[];
  @Output() onEdit: EventEmitter<Classroom> = new EventEmitter();
  @Output() onDelete: EventEmitter<Classroom> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
