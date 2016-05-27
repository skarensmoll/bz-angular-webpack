# Hello world

This project is a simple Hello World using angular with directives as components, webpack configuration files are also included to generate a bundle distribution.


### Prerequisites

* You need  node.js tools to initialize test and webpack compilation
* You must have node.js and its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).
* You must have webstorm.  You can get them from [https://www.jetbrains.com/webstorm/](https://www.jetbrains.com/webstorm/).

### Clone helloworld-angular-webpack project

Clone the Hello world project repository using [git][git]:

```
git clone "https://bitbucket.org/itaimal/helloworld-angular-webpack.git"
cd helloworld-angular-webpack
git config user.name "{{your user}}"
git config user.email "{{your email}}"
git config credential.helper store
git pull
```


Or download as .zip [https://bitbucket.org/itaimal/helloworld-angular-webpack/downloads](https://bitbucket.org/itaimal/helloworld-angular-webpack/downloads)



### Install Dependencies

We have dependencies for test enviroment in this project, this tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].


We have configured `npm` to download all tools on WebContent/node_modules

```
cd helloworld-angular-webpack/WebContent
helloworld-angular-webpack\WebContent>npm install
```


* `node_modules` - contains the npm packages for the tools we need




### Webpack
To generate the bundle and to start the application, you must run:

```
helloworld-angular-webpack\WebContent>webpack
helloworld-angular-webpack\WebContent>npm start
```
Once generated the bundle, you can open  the project with webstorm and open the index.html in the root and see the application in a browser. http://localhost:3000/index.html#/





(Optional)watch for changes in source files
```
helloworld-angular-webpack\WebContent>webpack -w 
```
