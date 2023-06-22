import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl="http://localhost:8080/api/v1/students";

  constructor(private httpClienet:HttpClient) { }

  getStudentsList():Observable<any>{
    return this.httpClienet.get<Student[]>(`${this.baseUrl}`);
  }

  createStudent(student:Student):Observable<any>{

    return this.httpClienet.post(this.baseUrl,student);

  }
  getStudentById(Id: number): Observable<Student>{
    return this.httpClienet.get<Student>(`${this.baseUrl}/${Id}`);
  }
  
  updateStudent(Id: number, student: Student): Observable<Object>{
    return this.httpClienet.put(`${this.baseUrl}/${Id}`, student);
  }
  deleteStudent(Id:number):Observable<Object>{
    return this.httpClienet.delete(`${this.baseUrl}/${Id}`);
  }



}
