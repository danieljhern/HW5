document.addEventListener("DOMContentLoaded", function (event) {

document.getElementById("add-movie").addEventListener("click", addMovie);
document.getElementById("show-movies").addEventListener("click", displayMovies)
    
});

let addMovie = function () {
    let movie = new Movie(
        document.getElementById("movie-name").value,
        document.getElementById("movie-rating").value
    );
    if (!movie.isValid()) {
        alert("Please complete all fields. " +
            "rating must be numeric " +
            "and 1 thru 5");
    } else {
        movies.push(movie);  
        displayMovies();
    }
    document.getElementById("movie-name").focus();
};



let movies = [];

let displayMovies = function () {

    let displayString = ""

    for (let i in movies) {
        
        displayString += movies[i].GetAll() + "\n"
    }
    
    document.getElementById("movie-list").value =  displayString 
};


    
