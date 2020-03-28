import { Injectable } from '@angular/core';
import { Classroom } from '../models/classroom.model';
import { Student } from '../models/student.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../models/page.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl = 'http://localhost:8080/';

  saveStudent(classroom: Classroom, student: Student) {
    const url = this.apiUrl + 'classrooms/' + classroom.id + '/students';
    return this.httpClient.post<Student>(url, student);
  }

  updateStudent(classroom: Classroom, student: Student) {
    const url = this.apiUrl + 'classrooms/' + classroom.id + '/students/' + student.id;
    return this.httpClient.put<Student>(url, student);
  }

  deleteStudent(classroom: Classroom, student: Student) {
    const url = this.apiUrl + 'classrooms/' + classroom.id + '/students/' + student.id;
    return this.httpClient.delete<Student>(url);
  }

  getAllStudents(page?: number, size?: number): Observable<Page<Student>> {
    
    const url = this.apiUrl + 'students';
    
    if (page !== null && size !== null) {
      let params = new HttpParams().set('page', page.toString()).set('size', size.toString());
      return this.httpClient.get<Page<Student>>(url, {params});
    } else {
      return this.httpClient.get<Page<Student>>(url);
    }
    
  }

  getStudent(studentId: number) {
    const url = `${this.apiUrl}students/${studentId}`;
    return this.httpClient.get<Student>(url);
  }

  getStudentClassroom(studentId: number) {
    const url = this.apiUrl + `students/${studentId}/classroom`;
    return this.httpClient.get<Classroom>(url);
  }
}
