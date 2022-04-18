export class Repository{
    
    html_url!: string
    description!: string
    language!: string
    name!: string
    forks_count!: number
    created_at!: Date;
    watchers_count!: number
    default_branch!: string

  constructor( 
    
    html_url: string,
    description: string,
    language: string,
    name: string,
    forks_count: number,
    created_at: Date,
    watchers_count: number,
    default_branch: string) {

      this.html_url = html_url;
      this.description = description;
      this.language =  language;
      this.name = name;
      this.forks_count = forks_count;
      this.created_at = created_at;
      this.watchers_count = watchers_count;
      this.default_branch = default_branch;


    
  }
  
}

// interface RepositoryInterface{

    
//     html_url: string,
//     description: string,
//     name: string,
//     language: string;
//     forks_count: number,
//     created_at: Date;
//     watchers_count: number,
//     default_branch: string,
   

// }

// "url": "https://api.github.com/repos/octocat/Hello-World",