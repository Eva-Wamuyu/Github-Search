import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OopsNotFoundComponent } from './oops-not-found/oops-not-found.component';
import { RepoSearchFormComponent } from './repo-search-form/repo-search-form.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { UserSearchFormComponent } from './user-search-form/user-search-form.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: 'full'},
  {path: "home", component: ResultsPageComponent},
  {path: "RepoLens", component: RepoSearchFormComponent},
  {path: "UserLens", component: UserSearchFormComponent},
  {path: "**", component: OopsNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}