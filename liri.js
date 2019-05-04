require("dotenv").config();

var moment = require("moment")
var axios = require("axios")
var keys = require("./keys.js");
var nodeSpotifyApi = require("node-spotify-api");
var moment = require("moment");
var fs = require("fs");
var spotify = new Spotify(keys.spotify)
var omdb = process.env.OMDB_API;

var command = process.argv[2];
var query = process.argv[3];

for(var i = 4; i < process.argv.length; i++) {
  if(i >4 && i<process.argv.length) {
    query += process.argv[i];
  }else{
    query += process.argv[i];
  }
}

switch (command) {
  case "concert-this";
     concertThis();
      break;
  case "concert-this";
      concertThis();
       break;
  case "concert-this";
       concertThis();
        break;
  case "concert-this";
        concertThis();
         break;



    }







// var concertThis = function () {

// }

// var spotifyThisSong = function () {
    
//     var spotify = new Spotify(keys.spotify);

// }

var movieName = process.argv[2];

// axios.get(`http://www.omdbapi.com/?apikey=${keys.OMdB.key}=&t=back to the future`)

var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=[trilogy]";

    axios.get(queryURL).then(
    movieThis = function () {
      console.log("Title: " + movieResponse.data.Title);
      console.log("Year: " + movieResponse.data.Year);
      console.log("Rated: " + movieResponse.data.Rated);
      console.log("Country: " + movieResponse.data.Country);
      console.log("Language: " + movieResponse.data.Language);
      console.log("Plot: " + movieResponse.data.Plot);
      console.log("Actors: " + movieResponse.data.Actors) ;
      console.log(": " + movieResponse.data.Rating[1].Value);
    
    
    
    
    })
    .catch(function (error) {
      console.log(error);
    });



movieThis();

// var doWhatItSays = function () {

// }

