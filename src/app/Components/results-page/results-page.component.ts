import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/Classes and Services/Repositories';
import { RequestService } from 'src/app/Classes and Services/requestService';
import { environment } from 'src/environments/environment';
import { User} from 'src/app/Classes and Services/Users';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {

  
  wamuyu = new User("","",0,0,"","",0, "");
  wamuRepo = new Repository("","","","",0,new Date(),0,"");
  wamuRepos : any = [];
  
  constructor(private http: HttpClient,private httpreq:RequestService) { }

  
  ngOnInit(): void {
    this.userGet();
    this.repoGet();
    // this.getUserRepo();

  }



  userGet(){
    this.httpreq.searchUser('Eva-Wamuyu').subscribe(
      (data)=>{
        this.wamuyu = new User(data.login, data.name, data.followers, data.following, data.avatar_url, data.repos_url, data.public_repos, data.html_url);
        
        return this.wamuyu;
      }
    )
  }


  repoGet(){
    this.httpreq.getUserRepo('Eva-Wamuyu').subscribe(
      (data)=>{
        this.wamuRepos = data;
        console.log(this.wamuRepos);

        console.log(this.wamuRepos)
        return this.wamuRepos;
      }
    ), (err:any) => {
      console.log("not found");
      alert("Oops Not Found")
    }
  }

  // repoGet(){
  //     this.http.get<Repository>(this.httpreq.G_URL+"users/Eva-Wamuyu/repos?order=created&sort=asc?-access_token="+environment.devKey).subscribe(
  //       data=>{
  //         for(let i=0; i<this.wamuRepos.length; i++)
  //         this.wamuRepo = new Repository(data.html_url, data.description, data.git_url, data.forks_count, data.stargazers_count, data.watchers_count, data.default_branch);
         
          
  //       }
  //     )
  //   }

  



}

  // userGet(){
  //   this.http.get<User>(this.httpreq.G_URL+"users/Eva-Wamuyu").subscribe(
  //     data =>{
  //       this.wamuyu = new User(data.login, data.name, data.followers, data.following, data.avatar_url, data.repos_url, data.public_repos, data.html_url);
  //       console.log(data)
  //     },
  //   )
    

  // }

  