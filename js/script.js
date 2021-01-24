"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("Как вы его оцените?", "");

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("Daaaamn");   
    } else {
        console.log("Baaaad");
        i--;
    }
}

if (personalMovieDB.count < 10 && personalMovieDB >= 0) {
    console.log("Просмотренно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классический зритель");
} else if (personalMovieDB >= 30) {
    console.log("Вы киноман!");
} else {
    console.log("Данные введены неверно");
}

console.log(personalMovieDB);