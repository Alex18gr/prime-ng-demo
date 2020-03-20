import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Classroom } from '../models/classroom.model';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  // the HttpClient is used to communicate through http requests with the API
  constructor(private httpClient: HttpClient) { }

  // the base url of the api
  private apiUrl = 'http://localhost:8080/';

  /**
   * get all the classrooms
   */
  getClassrooms() {
    const url = this.apiUrl + 'classrooms';
    return this.httpClient.get<Classroom[]>(url);
  }

  /**
   * get a classroom based on the given classroom id
   */
  getClassroom(classroomId: number) {
    const url = this.apiUrl + 'classrooms/' + classroomId;
    return this.httpClient.get<Classroom>(url);
  }

  /**
   * save a given classroom with POST http request
   */
  saveClassroom(classroom: Classroom) {
    const url = this.apiUrl + 'classrooms';
    return this.httpClient.post<Classroom>(url, classroom);
  }

  /**
   * update a given classroom with PUT http request to the API
   */
  updateClassroom(classroom: Classroom) {
    const url = this.apiUrl + 'classrooms/' + classroom.id;
    return this.httpClient.put<Classroom>(url, classroom);
  }

  /**
   * deletes a given classroom using DELETE http request to the API
   */
  deleteClassroom(classroom: Classroom) {
    const url = this.apiUrl + 'classrooms/' + classroom.id;
    return this.httpClient.delete<Classroom>(url);
  }
}
