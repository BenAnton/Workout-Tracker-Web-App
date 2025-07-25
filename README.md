# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

* Node.js
* .Net 6 SDK (or later)
* PostgresSQL
* Target Framework: .net 9.0

### Getting Started...

1. Clone the repository:  (CLI) git clone https://github.com/BenAnton/Workout-Tracker-Web-App
2. (CLI) cd Workout-Tracker-Web-App
3. (CLI) cd frontend
4. Install frontend dependencies:  (CLI) npm install
5. (CLI) npm run dev
6. Open http://localhost:3000 to view it in your browser.
7. (CLI) cd backend
8. (CLI) dotnet run
9. Open http://localhost:5282 to view it in your browser
10. Make sure that PostgresSQL is running and your connection string is configured in appsettings.json
11. (CLI) dotnet ef migration add InitialCreate => dotnet ef database update

## Project Overview

A web application for viewing exercises, creating and tracking workouts and monitoring progress and overall statistics.

### Key Technologies:

* React (frontend)
* ASP.NET Core Web API (backend)
* PostgresSQL (relational database)
* Entity Framework Core (ORM)
* JWT authentication (secure login)
* Podman (Containerisation)

### Also Used:

* Reacted Router
* Context API
* CSS
* ASP.NET Identity

### Containerisation with Podman
* A docker-compose.yml seperated the project into three containers:
* Frontend
* Backend
* Database

To run the project within the containers:
(CLI) podman-compose up (from the proejct root folder)

### Deployment on Render
The project is deployed using render.com, it handles CI/CD from Github. The project can be found:
https://workout-frontend-4ktp.onrender.com

I have set up a test user if anyone would like to have a look, the following credentials should allow you to see: 
* Saved workouts
* Workout History
* Dashboard Stats

Username: TestUser123  
Password: TestUser123!

### Testing

* Jest for frontend testing
* Xunit for backend testing

## Features

* Authentication: Secure login and signup using JWTs.
* Create Workouts: Design custom workouts from the exercise database.
* Start and complete workouts: Log workout sessions from previously created workouts.
* Workout History: View workout history from previously logged workouts.
* Exercise History: View exercise history from previously logged workouts.
* Dashboard Overview: Summarised view of total workouts, total weight lifted and total reps.
* Responsive UI: Responsive from ultra-wide monitor to standard phone screen.
* Tooling for weight conversion, plate calculations and one rep max calculator.

### Acknowledgments

* Exercises obtained from WGER API
* Project used Create-React-App and .Net Core templates.

### Screenshots

<img src="Frontend/public/Screenshots/homepage1.png" width=300/>\
<img src="Frontend/public/Screenshots/login.png" width=300/>\
<img src="Frontend/public/Screenshots/workouthistory.png" width=300/>\
<img src="Frontend/public/Screenshots/workouts.png" width=300/>\
<img src="Frontend/public/Screenshots/tools.png" width=300/>\

### Author

Ben Metaxas-Antonaropulos

https://www.linkedin.com/in/ben-anton-13334168/