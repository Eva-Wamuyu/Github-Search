import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Repository } from "./Repositories";
import { User, UserInterface } from "./Users";

@Injectable(
  {providedIn: 'root'}
  
)




export class RequestService{



  G_URL = "https://api.github.com/";
  
  // TEST_URL = "https://api.github.com/users/Eva-Wamuyu";

  constructor(private http: HttpClient){}

  searchUser(userName:string):Observable<UserInterface[]>{
    
        
    return this.http.get<UserInterface[]>(this.G_URL+'users/'+userName);

  }
  getUserRepo(userName:string):Observable<Repository[]>{
    return this.http.get<Repository[]>(this.G_URL+'users/'+userName+'/repos?order=created&sort=asc?-access_token='+environment.devKey);
  }

  searchRepo(repoName:string):Observable<Repository[]>{

    return this.http.get<Repository[]>(this.G_URL+repoName);
  }




  // searchUser(userName:string){

    
  //   return this.http.get(this.G_URL+'users/'+userName);

  // }

  
getMe(){
  this.http.get(this.G_URL+"/users");
}


}