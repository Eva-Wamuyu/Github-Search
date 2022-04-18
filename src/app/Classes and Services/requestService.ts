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

  G_URL = "https://api.github.com/";
  gitUser = new User("","",0,0,"","",0,"");
  
  // TEST_URL = "https://api.github.com/users/Eva-Wamuyu";

  constructor(private http: HttpClient){}

  searchUser(userName:string):Observable<any>{
    
        
    return this.http.get<User>(this.G_URL+'users/'+userName)

  }
  getUserRepo(userName:string):Observable<any>{

    return this.http.get<HttpClient>(this.G_URL + 'users/'+ userName + '/repos?sort=created&direction=asc?access_token=' + environment.devKey
    )
    // return this.http.get<Repository>(this.G_URL+'users/'+userName);
  }

  searchRepo(repoName:string):Observable<any>{

    
    return this.http.get<Repository>(this.G_URL+"search/repositories?q="+repoName);
  }

  



  // searchPerson(user:any){
  //   this.http.get<User>(this.G_URL+"users/"+user).subscribe(
  //     (data:any) =>{
  //       this.gitUser = new User(data.login, data.name, data.followers, data.following, data.avatar_url, data.repos_url, data.public_repos, data.html_url);
  //       console.log(data);
  //     }
  //   );
  // }


  // 
  // searchUser(userName:string){

    
  //   return this.http.get(this.G_URL+'users/'+userName);

  // }

  // +'repos/-access_token='+environment.devKey

  
// getMe(){
//   this.http.get(this.G_URL+"/users");
// }


}