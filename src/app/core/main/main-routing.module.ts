import { SinglePageAppComponent } from './single-page-app/single-page-app.component';
import { ResponsivityComponent } from './responsivity/responsivity.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
