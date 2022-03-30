 "use strict";

const numberOfFilms = +prompt('скільки фільмів ви переглянули','');

const personalMovieDB =  {
  count: numberOfFilms,
  movies: {},
  actors: {},
  geners: [],
  privat: false
};

const a = prompt ('Один з останніх переглянутих фільмів',''),
b = prompt('На скільки оцінете його?',''),
с = prompt('Один з останніх переглянутих фільмів',''),
d =('На скільки оцінете його','');

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;

console.log(personalMovieDB);
