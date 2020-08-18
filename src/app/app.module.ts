import { PageNotFoundModule } from './modules/notfound/pagenotfound.module';
import { CoursesModule } from './modules/courses/courses.module';
import { LoginModule } from './core/login/login.module';
import { UserModule } from './modules/user/user.module';
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
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    LoginModule,
    CoursesModule,
    PageNotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
