"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
    while (numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms == null){
        numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function remember() {
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
}

remember();

function detectMovieLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB >= 0) {
        console.log("Просмотренно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    } else if (personalMovieDB >= 30) {
        console.log("Вы киноман!");
    } else {
        console.log("Данные введены неверно");
    }
}

detectMovieLevel();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
        while (personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null || !isNaN(personalMovieDB.genres)){
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
        }
    }
}

writeYourGenres();

function showMyDB(condition) {
    if (!condition) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);