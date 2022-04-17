import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { RepoSearchFormComponent } from './repo-search-form/repo-search-form.component';

const routes: Routes = [
  {path: "", component: HeroComponent},
  {path: "hello", component: RepoSearchFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}