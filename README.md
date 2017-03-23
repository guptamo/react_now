# React Now
An opinionated React starter package that makes getting up and going with react development simple, and easy.

It implements all the new webpack configuration magic including tree shaking, and css modules while also inclu. Looking to add support for and hot module replacement in the future.

It's been created using yarn as a package manager but it should work basically the same if you use npm.

## Opinions
### 1. Always Obey the Testing Goat
Most apps *should* have at least a basic testing suite. Why not take the hassle out of getting it up and running? The basic testing suite that I've implemented uses Enzyme, Mocha and Chai to try and cover most unit testing needs.

### 2. Production Builds Should Be as Easy as Development
Don't put away your checklists just yet, but I've tried to take the confusion out of generating small-ish production bundles.

### 3. Global Scope is Bad
Controversial, I know. That being said many react starters still don't implement css modules, and I think it's a good idea to get new projects started with locally scoped css. We've already been liberated from global javascript...let's take the next step.

### 4. Reloading is Tedious
I've implemented all the Hot Module Reloading voodoo that Webpack can do so that you can see all your changes with reloading your browser! Life is good!

## How To

### Installation
1. Clone this project
```
git clone https://github.com/guptamo/react_now.git .
```
2. Install Dependencies
Yarn
```
yarn install
```

npm
```
npm install
```

### Start the Development Server
```
(yarn/npm) start
```

### Start Testing  
```
(yarn/npm) test
```

### Create a Production Build
```
(yarn/npm) build
```
