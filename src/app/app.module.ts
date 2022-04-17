import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import {AppRoutingModule} from './Components/routing-module'
import { AppComponent } from './app.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { HeroComponent } from './Components/hero/hero.component';
import { UserSearchFormComponent } from './Components/user-search-form/user-search-form.component';
import { RepoSearchFormComponent } from './Components/repo-search-form/repo-search-form.component';
import { ResultsPageComponent } from './Components/results-page/results-page.component';
import { OopsNotFoundComponent } from './Components/oops-not-found/oops-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroComponent,
    UserSearchFormComponent,
    RepoSearchFormComponent,
    ResultsPageComponent,
    OopsNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
