import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Repository } from "./Repositories";
import { User } from "./Users";

@Injectable(
  {providedIn: 'root'}
  
)




export class RequestService{

  



  
  key = environment.devKey;
  user = 'Eva-Wamuyu';

  AuthenticatedURL = `https://${this.user}:${this.key}@api.github.com/`
  gitUser = new User("","",0,0,"","",0,"");


  constructor(private http: HttpClient){}

  searchUser(userName:string):Observable<any>{
    
        
    return this.http.get<User>(this.AuthenticatedURL+'users/'+userName)

  }
  getUserRepo(userName:string):Observable<any>{

    return this.http.get<Repository>(this.AuthenticatedURL + 'users/'+ userName + '/repos?sort=created&direction=asc?access_token=' + this.key
    )

  }

  searchRepo(repoName:string):Observable<any>{

    
    return this.http.get<Repository>(this.AuthenticatedURL+"search/repositories?q="+repoName);
  }

  





}