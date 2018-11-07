# README.MD
Please read the instruction on this file before working on the project.
<br>
This repository has been created for front-end part of **ANOBOARD** using mainly ReactJS and SCSS

quick link:
- [trello](https://trello.com/b/ELM3AR0h/anoboard)
- if you cannot access the link above, first accept the invitation [here](https://trello.com/invite/b/ELM3AR0h/0b1536c363948e3daea6a7fcf56aaa5c/anoboard)

## Index
1. Instruction on how to work on this repository
2. TO-DO List
3. Ref: React Library
4. Ref: Assets
5. Ref: React Command Guide


## HOW TO
~~aka my effort to keep this organized~~<br>
Here, we are using **ReactJS** and **CSS/SCSS** stylesheet.

1. To start working, first clone the repository, then go to the project folder (where package.json is) and then run `npm install` and `npm start`. After the first pull, you can run project only with `npm start`.You also have to install sass package for scss reference, so run the command the npm prompt you when trying to run the project
2. The directory we'll be working on is `src` and `public`. React and JavaScript files are kept in `/src`, and stylesheets are kept in `/src/scss`. Downloaded Fonts and assets should be kept in `public`. Creating a new folder in the dir is fine if you need it. Just try to be as organized as possible.
3. During working, if you found a part that someone else should be working on, please mark it with `TODO:` and add it to TODO section *(refer to TO-DO LIST section for more information)*
4. If you want to use any library that is not yet included in the work, please install it using`npm install` and add the name of the library to *React Library* Section. Including css file and stuffs using linking are fine, but please see if there exists a react plugin to be installed (just because it is easier)<br>
5. **In the last, all the files in this repository will be packed using webpack to get `bundle.js` and `bundle.css`**, but we will wait until front-end and API are finished before packing.

please **DO NOT** copy assets from the old repository to here if you are not using it. there're too many unused files there, and I am not sure which one are actually used, so this way (ideally) we could delete everything there after we finish with this one.

## TO-DO LIST
### Guide
- Please add the comment with keyword `TODO:` and include a short tag/category in <> before describing the task. For example:
`TODO: <API> request ___ from the server`
- Please also list it in the [trello](https://trello.com/b/ELM3AR0h/anoboard) with location(filename) in the description if possible. you can freely create a new tag/label if you want to
- When working on something, please move the task to DOING section on trello; comment your name on it if possible.
- If you are done with the task, delete the comment `TODO:` from the source code, move the task into DONE section on trello
<br>


### Tag List
- `API`: request/pushing of information between front-end to back-end
- `mockup`: fake information used to preview the website, to be changed/deleted
when the corresponding API part is finished.
- `frontend`: interface/design

### Trello
- [trello](https://trello.com/b/ELM3AR0h/anoboard)
- again, if you cannot access the link above, first accept the invitation [here](https://trello.com/invite/b/ELM3AR0h/0b1536c363948e3daea6a7fcf56aaa5c/anoboard) *will update to delete the link once everyone has joined*


## INSTALLED REACT LIBRARY

you can also find the list in `package.json` file
- [react-bootstrap](https://react-bootstrap.netlify.com)
- [react-fontawesome](https://fontawesome.com)
- [react-router](https://reacttraining.com/react-router/core/guides/philosophy)

**updated** deleting `reactstrap` and `react-bootstrap (v3)`. now use only `react-bootstrap (v4)`

## ASSETS
- fonts: Source Sans Pro

# React Command Guide

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
