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

  repository: Repository[] = []
  repoToFind = "Eva-Wamuyu"

  constructor(private requestSvs: RequestService) { }

  ngOnInit(): void {
  }

  repoFind(form:any){

    console.log(form.value)
    console.log(this.repoToFind)

    this.requestSvs.searchRepo(this.repoToFind).subscribe(
      (data)=>{
        this.repository = data;
        console.log(data);
      }
    )

    
  }
}
