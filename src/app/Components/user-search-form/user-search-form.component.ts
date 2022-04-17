import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/Classes and Services/requestService';
import { User } from 'src/app/Classes and Services/Users';

@Component({
  selector: 'app-user-search-form',
  templateUrl: './user-search-form.component.html',
  styleUrls: ['./user-search-form.component.css']
})
export class UserSearchFormComponent implements OnInit {

  user: User[] = [];
  use = '';


  constructor(private requestSvs: RequestService) { }

  ngOnInit(): void {
    
  }

  me:any;

  userFind(use:any){
    
  

    this.requestSvs.searchUser('Wamuyu').subscribe(
      (data)=>{
        
        this.me = data;
        console.log(this.me);

        
      },err =>{
        alert("oops");
      }
    )

    
  }

}
