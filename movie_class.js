
// our handy object constructor to create as many destination objects as we need.
let Movie = function (pMovie, pRating) {
    this.movie = pMovie;
    this.rating = parseFloat(pRating);


};

// adding methods to the object outside of its defintion
Movie.prototype.isValid = function () {
    if (this.movie == "" ||
        isNaN(this.rating)) {
        return false;
    } else if (this.rating > 0 && this.rating < 6) {
        return true;
    } 
};

Movie.prototype.GetAll = function() {
    return this.movie + " rating is " + this.rating;
};
