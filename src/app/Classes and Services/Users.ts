class User implements UserInterface{
  
  login!: string
  name!: string
  followers!: number
  following!: number
  html_url!: string

  avatar_url!: string;
  repos_url!: string;
  public_repos!: number


  constructor(login: string, name:string, followers:number, following:number, avatar_url: string, repos_url:string, public_repos:number, html_url:string){
    this.login = login;
    this.name = name;
    this.followers = followers;
    this.following = following;
    this.avatar_url = avatar_url;
    this.repos_url = repos_url;
    this.public_repos = public_repos;
    this.html_url = html_url
  }

}
interface UserInterface{
  login: string
  name: string
  followers: number
  following: number

  avatar_url: string;
  repos_url: string;
  public_repos: number
  html_url:string

}
export {User}
export {UserInterface}