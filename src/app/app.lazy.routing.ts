import { Routes, RouterModule, PreloadAllModules,NoPreloading } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import {UserComponent} from './user/user.component';
import {DepartmentComponent} from './department/department.component';
import {SubjectComponent} from './subject/subject.component';
import {SubjectEditComponent} from './subject/edit/subject-edit.component';

const APP_LAZY_ROUTES: Routes = [
   {
    path: 'user', component: UserComponent
  },
    {
    path: 'department', component: DepartmentComponent
  },
    {
    path: 'subjects', component: SubjectComponent
  },
  { path: 'subject/:id', component: SubjectEditComponent }
];

export const APP_LAZY_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_LAZY_ROUTES, {
  preloadingStrategy: NoPreloading,
});