import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/Classes and Services/Repositories';
import { RequestService } from 'src/app/Classes and Services/requestService';
import { User} from 'src/app/Classes and Services/Users';


@Component({
  selector: 'app-user-search-form',
  templateUrl: './user-search-form.component.html',
  styleUrls: ['./user-search-form.component.css']
})
export class UserSearchFormComponent implements OnInit {


  seeDetails = false;
  user: User[] = [];
  use = '';
  usersRepo: Repository[] = [];
  gitUser = new User("","",0,0,"","",0,"");
  repository = new Repository("","","","",0,new Date(),0,"");


  constructor(private requestSvs: RequestService, private http: HttpClient) { }

  ngOnInit(): void {
    
  }




  userFind(user:string){
    
    if(user==""){
  
      return;
    }
    this.seeDetails = true;
    this.repoGet(user);
    this.requestSvs.searchUser(user).subscribe(
      (data:any) =>{
        this.gitUser = new User(data.login, data.name, data.followers, data.following, data.avatar_url, data.repos_url, data.public_repos, data.html_url);
      
        return this.gitUser;
      }),(err:any)=>{
        console.log("Woops");
        alert("Not Found");
      }
    

  }

  repoGet(user:any){
    this.requestSvs.getUserRepo(user).subscribe(
      (data)=>{
        this.repository = new Repository(data.html_url, data.description, data.language, data.name, data.forks_count, data.created_at, data.watchers_count, data.default_branch);
        this.usersRepo  = data;
        
        console.log(this.usersRepo);
        
      }
    ), (err:any) => {
      console.log("not found");
      alert("Oops Not Found")
    }
  }



  

  


  

}
