require("dotenv").config();
var Spotify = require('node-spotify-api');
 

var moment = require("moment");
var axios = require("axios");
var fs = require("fs");
var keys = require("./keys.js");
var chalk = require('chalk');
var log = console.log;


var command = process.argv[2];
var userInput = process.argv.slice(3).join(" ");

switch(command) {
 case "concert-this":
      concertInfo();
      break;
 case "spotify-this-song":
      spotifyInfo();
      break;
 case "movie-this" :
      movies();
      break;  
  case "do-what-it-says":
      doIt();
      break;
   
   default:
      log("Please enter a valid serch term, such as {concert-this},");
     log("{spotify-this-song},{movie-this}, or {do-what it-says}");
      break;
}

 function movies() {
    if(!userInput) {
       userInput = "Spirited away";
      log("If you haven't watched 'Spirited away' then you should watch it" )
  }  

  var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=" + keys.movies.id;
 
 

  axios.get(queryUrl).then 
  (function(response) {
     
      log("-----------------------------------------------------------------------------------------------------------------------");
      log("                                                                                                                       ");
      log(chalk.yellow.bold("Title : ") + chalk.yellow.bold(response.data.Title));
      log("                                                                                                                       ");
      log(chalk.magenta.bold("Year : " )+ chalk.white.bold(response.data.Year));
      log(chalk.magenta.bold("IMBD Rating : " )+ chalk.white.bold(response.data.imdbRating));
      log(chalk.magenta.bold("Rotten Tomates Rating : ") + chalk.white.bold(response.data.Ratings[1].Value));
      log(chalk.magenta.bold("Country/Countries Produced : " )+ chalk.white.bold(response.data.Country));
      log(chalk.magenta.bold("Language : " )+ chalk.white.bold(response.data.Language));
      log("                                                                                                                       ");
      log("-----------------------------------------------------------------------------------------------------------------------");
      log("                                                                                                                       ");
      log(chalk.blue.bold("Plot : " )+ chalk.cyan.bold(response.data.Plot));
      log("                                                                                                                       ");
      log("-----------------------------------------------------------------------------------------------------------------------");
      log("                                                                                                                       ");
      log(chalk.blue.bold("cast : " )+ chalk.white.bold(response.data.Actors));
      log("                                                                                                                       ");
      log("-----------------------------------------------------------------------------------------------------------------------");
 });
 };

function concertInfo() {
     if(!userInput) {
        userInput = "Let it be";
       log("If you haven't heared 'Let it be ' then you should hear it" )
   }  
  
   var queryUrl2 = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=" + keys.bands.id
   axios.get(queryUrl2)
   .then(function(response) {
       for (var i = 0; i < response.data.length; i++) {

          log("-----------------------------------------------------------------------------------------------------------------------");
          log("  "); 
          log(chalk.yellow.bold("Venue Name: "+ response.data[i].venue.name));
           log(chalk.magenta.bold("Venue Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country));
           log(chalk.cyan.bold("Date of the Event: " + moment(response.data[i].datetime).format("L")));
           log("  "); 
           log("-----------------------------------------------------------------------------------------------------------------------");
          }
   });
}



 
 function  spotifyInfo(){
    
     var spotify = new Spotify(keys.spotify)

  spotify.search({ type: 'track', query: userInput}, function(err, data) {
   if (err) {
     return console.log('Error occurred: ' + err);
   }

   var userSong = data.tracks.items;

        log("-----------------------------------------------------------------------------------------------------------------------");
        log("  ");
        log(chalk.yellow.bold("Artist: " + userSong[0].artists[0].name));
        log(chalk.magenta.bold("Song Name: " + userSong[0].name));
        log(chalk.blue.bold("Preview Link: " + userSong[0].preview_url));
        log(chalk.green.bold("Album: " + userSong[0].album.name));
        log("  ");
        log("-----------------------------------------------------------------------------------------------------------------------");
    });
};

 


 function doIt () {
     fs.readFile("random.txt", "utf8", function(err, data) {
 
         if (err) {
             log(err);
         }
 
         var readArray = data.split(",");
 
         userInput = readArray[1];
 
         spotifyInfo(userInput);
     })
 };







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

