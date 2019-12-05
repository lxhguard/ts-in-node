"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var _ = __importStar(require("lodash"));
var svc = new GithubApiService_1.GithubApiService();
console.log(process.argv);
if (process.argv.length < 3) {
    console.log('必须传入用户名');
    console.log("例如 npm start LXHguard");
}
else {
    svc.getUserInfo(process.argv[2], function (user) {
        svc.getRepos(process.argv[2], function (repos) {
            var sortedRepos = _.sortBy(repos, [function (repo) { return repo.forks_count; }]);
            user.repos = sortedRepos;
            console.log(repos);
        });
    });
}
