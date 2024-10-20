# SecureVision AI - Smart Monitoring Platform for Security Cameras


SecureVision AI is a smart monitoring platform for security cameras which can detect human intrusions from camera footage and notify users about the intruder. The whole system is come up with a web application. This is the web server of the system which contain the backend of the web application.
This server is responsible for
 - User Authentication
 - User Authrorization
 - User registration and login
 - Communicate between desktop
 - Send intrusion notifications
 

For the database of the application PostgreSQL is used. As well as for prisma ORM is used for managing the databsase. Currently azure postgreSQL database is used as the database server.

And following are the environmental variables that used for the project.
 - DATABASE_URL="Url for the remote database"
 - TOKEN_SECRET="secret code for create jwt tokens"
 - TOKEN_EXPIRE_TIME="time for a jwt token to expire"
 - APP_PASSWORD="Google account password for sending the forgot password tokens"

You need to place above environmental variables on a .env files to run the application. As well as to run in the development environment you need to set PORT environmental variable also.


## Provided endpoints and functionalities
 - User CRUD operations
 - System CRUD operations
 - Camera CRUD operations
 - Notification services
 - Email sending services

## Technologies used
 - Express.js
 - Prisma
 - PostgreSQL
 - SocketIO
 
 
## Requirements
 - NodeJS installed in the PC
 - Locally or remote postgreSQL server
 
 
## Setup
 - Clone the Repository
 - Execute `npm i` to install the dependencies
 - Run `npx prisma migrate dev` to deploy the db schema
 - Run `node index.js` to start the server

## Development
 - Fork the repository to your account
 - Clone the repository to your pc
 - Execute `npm i` to install the dependencies
 - Run `npx prisma migrate dev` to deploy the db schema.  
 - Execute `node index.js` to start the server (Or otherwise you can user nodemon for this process)
 
 ## Testing
  - Testing is done using Jest
  

