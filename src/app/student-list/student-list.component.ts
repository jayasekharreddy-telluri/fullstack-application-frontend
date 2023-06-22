import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students:any;

  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit(): void {

    this.getStudents();
  }

  private getStudents(){

    this.studentService.getStudentsList().subscribe(data=>{
      this.students=data;
    })
  }

   updateStudent(id:number){
    this.router.navigate(['update-student',id]);
  }

  deleteStudent(id:number){

    this.studentService.deleteStudent(id).subscribe(data=>{
      this.getStudents();
    })
  }

  viewStudent(id:any){
    this.router.navigate(['student-details',id]);
  }
}
