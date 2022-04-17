import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/Classes and Services/requestService';
import { User } from 'src/app/Classes and Services/Users';

@Component({
  selector: 'app-user-search-form',
  templateUrl: './user-search-form.component.html',
  styleUrls: ['./user-search-form.component.css']
})
export class UserSearchFormComponent implements OnInit {

  user: User[] = []

  constructor(private requestSvs: RequestService) { }

  ngOnInit(): void {
  }

  userFind(form:any){

    this.requestSvs.searchUser(form.value).subscribe(
      (data)=>{
        this.user = data;
        console.log(data);
      }
    )

    
  }

}
