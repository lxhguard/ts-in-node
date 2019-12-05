export class Repo{
    name: string;
    description: string;
    url: string;
    size: string;
    forks_count: number;

    constructor(repo:any){
        this.name = repo.name;
        this.description = repo.description;
        this.url = repo.html_url;
        this.size = repo.name;
        this.forks_count = repo.forks_count;
    }
}