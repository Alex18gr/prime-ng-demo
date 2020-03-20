import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassroomsComponent } from '../classroom/classrooms/classrooms.component';
import { StudentsComponent } from '../student/students/students.component';
import { HomePageComponent } from '../home/home-page/home-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'classrooms', component: ClassroomsComponent, children: [
    
  ]},
  {path: 'students', component: StudentsComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
