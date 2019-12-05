#TypeScript + Nodejs 实战 Github API
#API样例：https://api.github.com/users/LXHguard

#项目创建步骤:
#1. npm init 
#2. tsc --init
#3. 打开tsconfig.json文件，找到"rootDir"解开注释，代表的是放源码的目录，改为./src
   打开tsconfig.json文件，找到"outDir"解开注释，代表的是输出目录，改为./out
   打开package.json文件，找到"scripts"，新增"start": "tsc && node out/index.js"
   根目录下新建src,out两个文件夹，分别包含index.tx, index.js
#4. 安装request库：(等同于axios)
#安装ts定义的配置文件：npm install @types/request --save-dev
#安装主要库：npm install request --save
#5.在src下新建一个 GithubApiService.ts
#将其引入到index.ts中
#6. 运行npm start
#报错：Request forbidden by administrative rules. Please make sure your request has a User-Agent header (http://developer.github.com/v3/#user-agent-required). Check https://developer.github.com for other possible causes.
#解决：在GithubApiService.ts中新增options对象，补充header
#输出比较乱，用命令：npm start | grep -vE "^typescript|^tsc|\ " | jq 进行过滤
#如果没有jq,mac电脑安装一下： brew install jq 
#jq将输出格式化了，带颜色，好看。
#7.src下新建User.ts
#如果检查太严格导致的报错，可以修改tsconfig.json中的"strict"为false。
#也可以将"strictPropertyInitialization"变为false
#8.src下新建Pepo.ts
#9. 仓库排序
#npm install lodash --save
#npm install @types/lodash --save-dev


