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
        movies.push(movie);  // storing each trip object created in the array, used as a "stack"
        displayMovies();
    }
    document.getElementById("movie-name").focus();
};



let movies = [];

// define the function used to calc and update screen output
let displayMovies = function () {

    let displayString = ""

    for (let i in movies) {
        
        // JS for loop auto's from 0 to length of collection
        //displayString = "test"
        displayString += movies[i].GetAll() + "\n"
        //displayString += movies[i].rating + "\n";
    // use added method of object defintion
    }
    
    document.getElementById("movie-list").value =  displayString // displayString; // update the data
    //document.getElementById("movie-name").select();           
};


    
