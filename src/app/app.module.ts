import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './home/navbar/navbar.component';
import { PrimeModule } from './prime/prime.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ClassroomsComponent } from './classroom/classrooms/classrooms.component';
import { StudentsComponent } from './student/students/students.component';
import { HttpClientModule } from '@angular/common/http';
import { ClassroomsTableComponent } from './classroom/classrooms-table/classrooms-table.component';
import { OverlayComponent } from './home/overlay/overlay.component';
import { ClassroomFormComponent } from './classroom/classroom-form/classroom-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    ClassroomsComponent,
    StudentsComponent,
    ClassroomsTableComponent,
    OverlayComponent,
    ClassroomFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
