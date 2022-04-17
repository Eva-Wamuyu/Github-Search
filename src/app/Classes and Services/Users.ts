class User implements UserInterface{
  
  login!: string
  name!: string
  followers!: number
  following!: number

  avatar_url!: string;
  repos_url!: string;
  public_repos!: number


  constructor(login: string, name:string, followers:number, following:number, avatar_url: string, repos_url:string, public_repos:number){
    this.login = login;
    this.name = name;
    this.followers = followers;
    this.following = following;
    this.avatar_url = avatar_url;
    this.repos_url = repos_url;
    this.public_repos = public_repos;
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

}
export {User}