var request = require("request");
var args = process.argv.slice(2);
console.log(args);
//console.log(movie_name);

// Then run a request to the OMDB API with the movie specified
if (args[0] === "movie-this") {
    request("http://www.omdbapi.com/?t=" + args[1] + "&y=&plot=short&apikey=40e9cece", function (error, response, body) {

        if (!error && response.statusCode === 200) {
            //console.log(body);
            console.log("Movie's title is: " + JSON.parse(body).Title);
            console.log("Movie's Year is: " + JSON.parse(body).Year);
            console.log("Movie's ratings is: " + JSON.parse(body).imdbRating);
            console.log("Country where movie was produced: " + JSON.parse(body).Country);
            console.log("Language of the movies: " + JSON.parse(body).Language);
            console.log("Plot of the movies: " + JSON.parse(body).Plot);
            console.log("Actors in the movie: " + JSON.parse(body).Actors);
        }
    });
}
//Title of the movie.
//  * Year the movie came out.
//  * IMDB Rating of the movie.
//  * Rotten Tomatoes Rating of the movie.
//  * Country where the movie was produced.
//  * Language of the movie.
//  * Plot of the movie.
//  * Actors in the movie.