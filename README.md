# Buy-and-sell-server
## What this project is about

This is server-side of "Ebay-clone" application using Front and Back technologies. 
It was created during [the Codaisseuer Academy](https://codaisseur.com/become-a-developer).

Take a look at the client side of the project [here](https://github.com/mnezmah/buy-and-sell-client)

## Table of contents:

- **[Technologies used](#technologies-used)**
- **[Goals for this project](#goals-for-this-project)**
- **[Features built so far](#features-built-so-far)**
- **[Endpoints used in API](#endpoints-in-this-API)**
- **[Featrures to add in the future](#features-to-add-in-the-future)**

## Technologies used

#### Click links to view some samples in this project👇

- **[Express](./db.js)**
- **[Sequelize](./Advertisments/model.js)**

## Goals for this project:

- To practice making full-stack app
- To combine front-end and back-end apps in one working project
- To practice disciplined git usage

## Features built so far:

- **[Create DB for Advertisments](./Advertisments)**
- **[Create server](./index.js)**

## Features to add in the future:

- Add a comments table in db to be able to comment the ads
- Create an Authorisation for users
- Add a delete endpoint for removing the ads
- Deploy the app on Heroku

## Endpoints in this API

These are the available endpoints of the API `@root : http://mywebsite.com`.
* **POST @root/ads**:  
    Creates a new advertisment.
    
* **GET @root/ads**:  
   Returns list of all the advertisments.
    
* **GET @root/ads/:id**:  
    Returns a single advertisment.
    
* **PUT @root/ads/:id**:  
    Changes the advertisment.
    
