"use strict"

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('How many films have you watched?');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How many films have you watched?');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true50
};



function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const
      a = prompt('One of the last movie ?'),
      b = prompt('How would you rate the movie ?');
    if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('DONE');
    } else {
      console.log('not DONE');
      i--;
    }
  }
}

rememberMyFilms();


function detectPersonalLevel(params) {
  if (personalMovieDB.count < 10) {
    console.log('you have not seen a lot of films');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('you are the classic viewer');
  } else if (personalMovieDB.count >= 30) {
    console.log('you are the CRAZy viewer');
  } else {
    console.error('Error');
  }
}

detectPersonalLevel();

function showMyDB() {
  if (!personalMovieDB.privat) {
    console.log(personalMovieDB);
  }
}

showMyDB();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Your favorite genre number is ${i}`);
    personalMovieDB.genres[i - 1] = genre;
  }
}

writeYourGenres();