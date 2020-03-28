import { Component, OnInit, Input } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api/public_api';
import { Student } from 'src/app/models/student.model';
import { StudentService } from '../student.service';
import { Page } from 'src/app/models/page.model';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {
  totalRecords: number;
  students: Student[];
  studentsPageData: Page<Student>;
  firstElementIndex: number;
  cols: any[] = [
    { field: 'id', header: 'ID' },
    { field: 'fullName', header: 'Full Name' },
    { field: 'grade', header: 'Grade' },
    { field: 'birthDate', header: 'Birth Date' }
  ];
  rows = 5;
  dataLoaded: boolean = false;
  dataLoading: boolean = false;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.initializeData(0);
  }

  initializeData(page: number) {
    this.dataLoaded = false;
    this.studentService.getAllStudents(0, this.rows).subscribe((data: Page<Student>) => {
      this.studentsPageData = new Page(data);
      this.totalRecords = this.studentsPageData.totalElements;
      this.firstElementIndex = this.studentsPageData.number * this.studentsPageData.numberOfElements;
      this.students = this.studentsPageData.content;
      this.dataLoaded = true;
    });

  }


  loadData(event: LazyLoadEvent) {
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort in single sort mode
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec in single sort mode
    //multiSortMeta: An array of SortMeta objects used in multiple columns sorting. Each SortMeta has field and order properties.
    //filters: Filters object having field as key and filter value, filter matchMode as value
    //globalFilter: Value of the global filter if available
    // this.students = null; //do a request to a remote datasource using a service and return the cars that match the lazy load criteria
    // console.log(event);
    const page = event.first / this.rows;
    this.dataLoading = false;
    this.studentService.getAllStudents(page, this.rows).subscribe((data: Page<Student>) => {
      this.studentsPageData = new Page(data);
      this.firstElementIndex = this.studentsPageData.number * this.studentsPageData.numberOfElements;
      this.students = this.studentsPageData.content;
      this.dataLoading = true;
    });
}

}
