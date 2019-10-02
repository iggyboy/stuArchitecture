// get the users name:

inquirer.prompt([
    {
      type: "input",
      message: "For your permanent record..What is your name?",
      name: "username"
    }
  ])
    .then(function (inquirerResponse) {
      if (inquirerResponse.username === "") {
        console.log("\n" + chalk.bold.red.bgYellowBright("Sorry, due to the requirements of your internet provider to report your every thought,"));
        console.log(chalk.bold.red.bgYellowBright(" we cannot accept requests from nameless people. Please abandon all hopes for anonymity, and try again\n"));
      }
      else {
        userName = inquirerResponse.username;
        userName = userName.toLowerCase();
        userName = userName.charAt(0).toUpperCase() + userName.slice(1);

  
        getUserQuery(inquirerResponse.username);
      }
    });
  
















    
  
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