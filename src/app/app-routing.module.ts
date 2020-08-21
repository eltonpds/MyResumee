import { MainComponent } from './core/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './layout/index/index.component';
import { CoursesComponent } from './modules/courses/courses.component';
import { UserComponent } from './modules/user/user.component';
import { LoginComponent } from './core/login/login.component';
import { PageNotFoundComponent } from './modules/notfound/pagenotfound.component';
import { LoginService } from './core/login/services/login.service';
import { SearchEngineComponent } from './core/main/search-engine/search-engine.component';
import { ResponsivityComponent } from './core/main/responsivity/responsivity.component';
import { SinglePageAppComponent } from './core/main/single-page-app/single-page-app.component';

const routes: Routes = [
  { path: 'usuario', component: UserComponent },
  { path: 'cursos', component: CoursesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'curriculo-digital', component: IndexComponent },
  { path: '', component: MainComponent ,
    children: [
      { path: '', component: SearchEngineComponent },
      { path: 'responsividade', component: ResponsivityComponent },
      { path: 'spa', component: SinglePageAppComponent }
    ] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginService]
})
export class AppRoutingModule { }
