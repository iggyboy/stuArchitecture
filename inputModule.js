// get the users name:

var inquirer = require("inquirer");
var fs = require("fs");
var results = require("./apiModule.js");


function getUserQuery() {

  inquirer.prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "Remember to start request with \'show\' or \'actor\' and then the name you are seeking.\n\nEnter Request Here:",
      name: "userQuery"
    },
  ])
    .then(function (inquirerResponse) {
      if (inquirerResponse.userQuery === "") {

        console.log("Nope, that's not a good request.. Try typing \"show Andy Griffit\" or something like that..")

        getUserQuery();
      } else {
        console.log("inquirerResponse", inquirerResponse);
        var thisQuery = inquirerResponse.userQuery;
        console.log("thisQuery = ", thisQuery);



        if (thisQuery.split(" ")[0]) {
          var qtype = thisQuery.split(" ")[0];
        }
        if (thisQuery.split(" ")[1]) {
          var thisSearch = thisQuery.split(" ").slice(1).join(" ");
        }


        switch (qtype) {
          case "show":
            // show lookup function
            console.log("qtype = ", qtype);
            console.log("thisSearch = ", thisSearch);

            sendData(qtype, thisSearch);

            break;
          case "actor":
            // actor lookup function
            console.log("qtype = ", qtype);
            console.log("thisSearch = ", thisSearch);
            sendData(qtype, thisSearch);
            break;
          default:
            console.log("OOPS, try again, but start with \'show\' or \'actor\'")
            console.log("qtype = ", qtype);
            console.log("thisSearch = ", thisSearch);

            getUserQuery()
          //getUserQuery();
        }
      }
    }
    
    );
}



function sendData(type, query) {

  fs.appendFile('log.txt', "\n\nSearch type: "+type+",  Query: "+query+"\n-------------------------------------------------------------------\n", function (err) {
    if (err) throw err;
    console.log('Saved!');
  });





console.log("Logged this search: Type: "+type+", and Query: "+query);

var person1 = new results(type,query);

//just sent data back?

}


getUserQuery();























//   function hint() {
//     var hints = chalk.bold.black.bgWhite("Here's what you can enter, and how I will respond!:\n\n");
//     hints += chalk.bold.black.bgWhite("Enter \"concert=Rolling Stones\"  -and I will find upcoming tour dates for you!\n");
//     hints += chalk.bold.black.bgWhite("Enter \"spotify=Taylor Swift\"    -and I will find whatever spotify does with that info!\n");
//     hints += chalk.bold.black.bgWhite("Enter \"movie=Rambo Last Blood\"  -and I will find something about Rambo last blood!\n\n");
//     // hints += chalk.bold.black.bgWhite("or, just Enter \"do whatever\"    -and I will find something to entertain/annoy you!\n");
//     console.log(hints);
//   // go back to getting query..
//     getUserQuery();
//   }