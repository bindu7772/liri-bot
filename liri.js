// Spotify client id: cb1e672eb6254d7393eaff33c5945209
//spotify client secret: 74931721ecac46b2909c3592109ac91e


var request = require("request");
var Spotify = require('node-spotify-api');

var args = process.argv.slice(2);
//console.log(args);
//console.log(movie_name);

// Then run a request to the OMDB API with the movie specified
if (args[0] === "movie-this") {
    if (args.length == 1) {
        request("http://www.omdbapi.com/?t=Mr.Nobody&y=&plot=short&apikey=40e9cece", function (error, response, body) {

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
    else {

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
}

if (args[0] == "spotify-this-song") {
    if (args.length === 1)
    {
        var spotify = new Spotify({
            id: "cb1e672eb6254d7393eaff33c5945209",
            secret: "74931721ecac46b2909c3592109ac91e"
        });

        spotify
          .search({ type: 'track', query: "The Sign" })
          .then(function (response) {
             // console.log(response);
              console.log("Artist(s): " + response.tracks.items[0].album.artists[0].name);
              console.log("The Song's name: " + response.tracks.items[0].name);
              console.log("Preview link from Spotify: " + response.tracks.items[0].preview_url);
              console.log("Album name: " + response.tracks.items[0].album.name);
          })
          .catch(function (err) {
              console.log(err);
          });
    }
    else {
        var name_arr = args.slice(1);
        var name = "";
        for (var i = 0; i < name_arr.length; i++)
        {
            name = name + " " + name_arr[i];
        }
       // console.log(name);
        var spotify = new Spotify({
            id: "cb1e672eb6254d7393eaff33c5945209",
            secret: "74931721ecac46b2909c3592109ac91e"
            });
 
    spotify
      .search({ type: 'track', query: name })
      .then(function(response) {
          //console.log(response);
          console.log("Artist(s): " + response.tracks.items[0].album.artists[0].name);
          console.log("The Song's name: " + response.tracks.items[0].name);
          console.log("Preview link from Spotify: " + response.tracks.items[0].preview_url);
          console.log("Album name: " + response.tracks.items[0].album.name);
      })
      .catch(function(err) {
          console.log(err);
      });
    }
}