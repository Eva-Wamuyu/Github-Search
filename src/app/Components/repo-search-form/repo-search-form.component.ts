import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/Classes and Services/Repositories';
import { RequestService } from 'src/app/Classes and Services/requestService';

@Component({
  selector: 'app-repo-search-form',
  templateUrl: './repo-search-form.component.html',
  styleUrls: ['./repo-search-form.component.css'],
  // providers: [RequestService]
})
export class RepoSearchFormComponent implements OnInit {

  repository = new Repository("","","","",0,new Date(),0,"");

  repositories = [];
  // repos = [];
  repoToFind!: string;

  constructor(private requestSvs: RequestService) { }

  ngOnInit(): void {
  }

  repoFind(repoToFind:string){

    
    console.log(repoToFind)

    this.requestSvs.searchRepo(repoToFind).subscribe(
      (data)=>{
        
        this.repositories = data;
        console.log(data);
        
      },
      err=>{
        console.log("Err");
        alert("Not Found");
      }
    )
  }
}
