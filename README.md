
# Product Catalogue
> Project made for recruitment process
> Live demo [_here_](https://tsh-interview.herokuapp.com/)

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)

## General Information
- This project has been assigned to me as a part of recruitment process. 
- It uses Backend API which was provided by the company. 
- Design that i've been using can be found [_here_](https://www.figma.com/file/2ViJ2lN6NJ28N4000VLdaa/zadanie_rekrutacyjne?node-id=0%3A1)
- Website is build with RWD (Responsive Web Design) in mind

## Technologies Used
-  [React.js](https://reactjs.org/)
- [TypeScript ](https://www.typescriptlang.org/)
-  [Material UI](https://mui.com/)
- REST API

## Screenshots

#### Desktop
![desktop 1screenshot](https://imgur.com/lSCW8Ob.png)

![desktop 2screenshot](https://imgur.com/6lOBuWa.png)
#### Mobile
![desktop 2screenshot](https://imgur.com/jfU0M6i.png)
![desktop 2screenshot](https://imgur.com/rzlz3b2.png)

## Pages

#### / (product view)
Main page of the web application, it contains a navbar with searchbar, 2 filters which can be applied using checkboxes and a log in button.

Depending on your search query and/or filter choices you will see products listed (8 per page) or an empty list if there is no product matching your requirements.

If products matching your description exceeds 8 - you'll be able to use pagination, which is implemented at the bottom.


#### /login
Used to login into website.  

This page is pretty simple - in order to login you'll need to use the form on the right side. (Forgot password button does nothing for now - i hope you remember your password 😅)


## Setup

How to set it up on my computer? It's as easy as it could be:
1. Clone the repository or fork it. 
```bash
cd {your_desired_path_in_your_local_machine}
git clone https://github.com/dariuszczajka/tsh-react-project
```
2. Run the commands down below

```bash
npm install
npm start
```
3.  🎉 🎉  Your app is working on port 3000 (probably on the http://localhost:3000/) 🎉 🎉 
 
## Project Status
Project is: _finished_ 


## Room for Improvement

To do:
- refactor whole code, using more modern approach in TypeScript,
- refactor code with better readability in mind

Ideas:
- own and independent server for this project (developed using ExpressJS and MongoDB)

## Contact
Created by Dariusz Czajka [LinkedIn](https://www.linkedin.com/in/dariuszczajka/) [E-mail](mailto:dczajka@tuta.io) - feel free to contact me!
