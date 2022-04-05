# Movie Tracker Database

A movie tracker database with Netflix website design.


<br>

![Teams Quote Message gif](https://media.giphy.com/media/bA3POCf1RGaOVKyiru/giphy.gif)

<br>

### To install and use it in your local machine:
              
- `$ git clone https://github.com/RecepCil/mtdb.git`

- `$ cd mtdb`

- `$ npm install`

<br>

### To serve and watch for changes:

- Get a The Movie Database API Key:

The Movie Database API is used for acquiring movie details. To use TMDB api, a **TMDB API Key** is required. You may reach out more info in this link below for more details.

https://developers.themoviedb.org/3/getting-started/introduction

- Create a Firebase RealTime Database & get credentials thereof:

The Firebase Realtime Database is a cloud-hosted NoSQL database that lets you store and sync data in realtime. To create a database and to get credentials, you can use this link below. 

https://firebase.google.com/docs/database/rest/start?authuser=0&hl=en

- `$ cp .env_sample .env`

- Open .env file and type TMDB API key & Firebase RealTime Database credentials. 

- `$ cd ..`

- `$ npm run start`

<br>

### To build:

- `$ npm run build`

<br>

---
[MIT License](https://opensource.org/licenses/MIT)
