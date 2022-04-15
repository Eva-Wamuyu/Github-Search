import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { HeroComponent } from './Components/hero/hero.component';
import { UserSearchFormComponent } from './Components/user-search-form/user-search-form.component';
import { RepoSearchFormComponent } from './Components/repo-search-form/repo-search-form.component';
import { ResultsPageComponent } from './Components/results-page/results-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroComponent,
    UserSearchFormComponent,
    RepoSearchFormComponent,
    ResultsPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
