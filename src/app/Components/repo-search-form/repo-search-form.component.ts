import { Component, IterableDiffers, OnInit } from '@angular/core';
import { Repository } from 'src/app/Classes and Services/Repositories';
import { RequestService } from 'src/app/Classes and Services/requestService';

@Component({
  selector: 'app-repo-search-form',
  templateUrl: './repo-search-form.component.html',
  styleUrls: ['./repo-search-form.component.css'],
  // providers: [RequestService]
})
export class RepoSearchFormComponent implements OnInit {

  // repository = new Repository("","","","",0,new Date(),0,"");
  seeDetails = false;
  repositories:Repository[] = [];
  // repos = [];
  repoToFind!: string;

  constructor(private requestSvs: RequestService) { }

  ngOnInit(): void {
  }

  repoFind(repoToFind:string){

    if(repoToFind == ''){
      return;
    }

    
    this.requestSvs.searchRepo(repoToFind).subscribe(
      (data)=>{
        let items:any = 'items';
       

        this.repositories = data[items];
      
        this.seeDetails = true;
        
        
      },
      err=>{
        console.log("Err");
        alert("Not Found");
      }
    )
  }
}
