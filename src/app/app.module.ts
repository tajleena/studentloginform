import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { LogInComponent } from './log-in/log-in.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AddStudentComponent, StudentListComponent, LogInComponent, EditStudentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
