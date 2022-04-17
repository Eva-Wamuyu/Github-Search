import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Repository } from "./Repositories";
import { User } from "./Users";

@Injectable(
  
)




export class RequestService{



  G_URL = "https://api.github.com/users/Eva-Wamuyu";
  // G_URL = "https://api.github.com/users/Eva-Wamuyu";

  constructor(private http: HttpClient){}

  searchUser():Observable<User[]>{

    return this.http.get<User[]>(this.G_URL);

  }

  searchRepo():Observable<Repository[]>{

    return this.http.get<Repository[]>(this.G_URL);
  }


  



}