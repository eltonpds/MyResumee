import { CoursesComponent } from './modules/courses/courses.component';
import { UserComponent } from './modules/user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'usuario', component: UserComponent },
  { path: 'cursos', component: CoursesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot([
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
