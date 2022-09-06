"use strict";

/*



%%%%%%%%%%%%    ЗАДАНИЕ 1   %%%%%%%%%%%%


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        a, b    
    },
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", " "),
      b = +prompt("На сколько оцените его?", " " ),
      c = prompt("Один из последних просмотренных фильмов?", " "),
      d = +prompt("На сколько оцените его?", " " );
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); 


@@@@@@@@    РЕЗУЛЬТАТ   @@@@@@@@

count: numberOfFilms,
movies: {фильм1: 8, фильм2: 9},
actors: {},
genres: [],
privat: false  



%%%%%%%%%%%%    ЗАДАНИЕ 2   %%%%%%%%%%%%


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        a, b    
    },
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) { 
    const a = prompt("Один из последних просмотренных фильмов?", " "),
          b = +prompt("На сколько оцените его?", " " );

    if (a != null && b != null && a !='' && a.length < 50) {
        personalMovieDB.movies[a] = b;    
        console.log('DONE'); 
    } else {
        console.log('error');
        i--;
    }
}

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log("Просмотренно довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классный зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("произошла ошибка");
};



%%%%%%%%%%%%    ЗАДАНИЕ 3   %%%%%%%%%%%%



let numberOfFilms;

function start() {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", " ");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", " ");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) { 
        const a = prompt("Один из последних просмотренных фильмов?", " ").trim(),
              b = +prompt("На сколько оцените его?", " " );
    
        if (a != null && b != null && a !='' && a.length < 50) {
            personalMovieDB.movies[a] = b;    
            console.log('DONE'); 
        } else {
            console.log('error');
            i--;
        }
    }

}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотренно довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классный зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("произошла ошибка");
    };
}

detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }  
}

showMyDB(personalMovieDB.privat);


function writeYourGeneres() {
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt('Ваш любимый жанр под номером ${i}');




        //  %%%УСТАРЕЛО%%%
        //  const genre = prompt('Ваш любимый жанр под номером ${i}');    
        //  personalMovieDB.genres[i - 1] = genre 




    }
}

writeYourGeneres();

 

// %%%%%%%%%%%%    ЗАДАНИЕ 4   %%%%%%%%%%%%
*/

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", " ");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", " ");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) { 
            const a = prompt("Один из последних просмотренных фильмов?", " ").trim(),
                  b = +prompt("На сколько оцените его?", " " );
        
            if (a != null && b != null && a !='' && a.length < 50) {
                personalMovieDB.movies[a] = b;    
                console.log('DONE'); 
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотренно довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классный зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }  
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGeneres: function() {
        for (let i = 1; i <= 3; i++){
            let genre = prompt('Ваш любимый жанр под номером ${i}');
            if (personalMovieDB.genres == '' || personalMovieDB.genres == null) {
                console.log('Вы ввели некорректно данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log("Любимый жанр ${i+1} - это ${item}");
        });
    }
}; 





