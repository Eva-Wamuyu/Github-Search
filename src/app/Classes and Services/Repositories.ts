export class Repository implements RepositoryInterface{
  private!: false
    html_url!: string
    description!: string
    git_url!: string
    stargazers_url!: string
    forks_count!: number
    stargazers_count!: number
    watchers_count!: number
    default_branch!: string

  constructor( 
    // private: false, 
    html_url: string,
    description: string,
    git_url: string,
    forks_count: number,
    stargazers_count: number,
    watchers_count: number,
    default_branch: string) {

      this.html_url = html_url;
      this.description = description;
      this.git_url = git_url;
      this.forks_count = forks_count;
      this.stargazers_count;
      this.watchers_count = watchers_count;
      this.default_branch = default_branch;


    
  }
  
}

interface RepositoryInterface{

    //  private: false,
    html_url: string,
    description: string,
    git_url: string,
    forks_count: number,
    stargazers_count: number,
    watchers_count: number,
    default_branch: string,
   

}

// "url": "https://api.github.com/repos/octocat/Hello-World",