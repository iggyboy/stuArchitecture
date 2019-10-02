module.exports = function (type, query) {

var fs = require("fs");
let axios = require("axios");
// let cli = ("./inputModule.js");


//var responseData = require("apiModule.js");

let data = {};
let queryURL;

// if(cli.type === "show"){ 

if(type === "show"){ 
    queryURL = "http://api.tvmaze.com/singlesearch/shows?q="+query+"&apikey=kuM7ivkaoUw8A7LnvDIep0RWqDZlidPF";
}
// else if (cli.type === "actor"){
else if (type === "actor"){
    queryURL = "http://api.tvmaze.com/search/people?q="+query+"&apikey=kuM7ivkaoUw8A7LnvDIep0RWqDZlidPF"
}else{
    queryURL = "http://api.tvmaze.com/search/people?q=Keanu+Reeves&apikey=kuM7ivkaoUw8A7LnvDIep0RWqDZlidPF";
}

axios({
    method: "get",
    url: queryURL
}).then(function (response) {   
    // console.log(response.data);

    // if (cli.type === "show") {
    if (type === "show") {
        data.title = response.data.name;
        data.genres = response.data.genres;
        data.rating = response.data.rating;
        data.network = response.data.network.name;
        data.summary = response.data.summary;
    }
    // else if (cli.type === "actor"){
        else if (type === "actor"){
        data.name = response.data[0].person.name
        data.birthday = response.data[0].person.birthday;
        data.gender = response.data[0].person.gender;
        data.country = response.data[0].person.country.name;
        data.url = response.data[0].person.url;
    }



   fs.appendFile('log.txt', "Results = "+JSON.stringify(data)+"\n-------------------------------------------------------------------\n\n", function (err) {
    if (err) throw err;
    console.log('Saved!');
  });



    console.log(data);
});

module.exports = {
    data: data
}

}