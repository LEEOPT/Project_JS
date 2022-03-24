 "use strict";

const numberOfFilms = +prompt('скільки фільмів ви переглянули','');

const personalMovieDB =  {
  count: numberOfFilms,
  movies: {},
  actors: {},
  geners: [],
  privat: false
};