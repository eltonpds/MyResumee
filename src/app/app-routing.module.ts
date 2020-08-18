import { LoginModule } from './core/login/login.module';
import { CoursesModule } from './modules/courses/courses.module';
import { UserModule } from './modules/user/user.module';
import { MainComponent } from './core/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './layout/index/index.component';
import { CoursesComponent } from './modules/courses/courses.component';
import { UserComponent } from './modules/user/user.component';
import { LoginComponent } from './core/login/login.component';
import { PageNotFoundComponent } from './modules/notfound/pagenotfound.component';
import { LoginService } from './core/login/services/login.service';

const routes: Routes = [
  { path: 'usuario', component: UserComponent },
  { path: 'cursos', component: CoursesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'curriculo-digital', component: IndexComponent },
  { path: '', component: MainComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UserModule,
    CoursesModule,
    LoginModule
  ],
  exports: [RouterModule],
  providers: [LoginService]
})
export class AppRoutingModule { }
