"use strict"

const numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const
  a = prompt('One of the last movie ?'),
  b = prompt('How would you rate the movie ?'),
  c = prompt('One of the last movie ?'),
  d = prompt('How would you rate the movie ?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);