import { PageNotFoundComponent } from './modules/notfound/pagenotfound.component';
import { LoginComponent } from './core/login/login.component';
import { CoursesComponent } from './modules/courses/courses.component';
import { UserComponent } from './modules/user/user.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { IndexComponent } from './layout/index/index.component';
import { AsideComponent } from './layout/aside/aside.component';
import { MainComponent } from './core/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    IndexComponent,
    AsideComponent,
    UserComponent,
    CoursesComponent,
    LoginComponent,
    PageNotFoundComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
