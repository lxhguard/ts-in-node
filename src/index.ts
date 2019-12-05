import { GithubApiService } from './GithubApiService';
import * as _ from 'lodash';
import { User } from './User';
import { Repo } from './Repo';


let svc:GithubApiService = new GithubApiService();

console.log(process.argv);

if(process.argv.length < 3){
    console.log('必须传入用户名');
    console.log("例如 npm start LXHguard");
}else{
    svc.getUserInfo(process.argv[2],(user:User) => {
        svc.getRepos(process.argv[2], (repos: Repo[]) => {
            let sortedRepos = _.sortBy(repos, [(repo:Repo) => repo.forks_count]);
            user.repos = sortedRepos;
            console.log(repos);
        });
    });
}


