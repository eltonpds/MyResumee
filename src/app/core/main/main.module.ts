import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { ResponsivityComponent } from './responsivity/responsivity.component';
import { SinglePageAppComponent } from './single-page-app/single-page-app.component';


@NgModule({
  declarations: [SearchEngineComponent, ResponsivityComponent, SinglePageAppComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
