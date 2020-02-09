const Express = require("express");
const App = Express( );
const port = 80;

const chalk = require("chalk");
const pokemons = require("json-pokemon");

App.get("/id/:id", (req, res) => {
	let result = {"error": "This ID is invalid."};

  pokemons.forEach((value) => {
    if(value.id == req.params.id) {
      result = value;
      res.send(value);
    }
  });

  if(result.error) {
    console.log(chalk.red(result.error));
  } else {
    console.log(chalk.green(req.path));
  }

});

App.get("/name/:name", (req, res) => {
	let result = {"error": "This name is invalid."};

  pokemons.forEach((value) => {
    if(value.name == req.params.name || value.name.toLowerCase() == req.params.name) {
      result = value;
      res.send(value);
    }
  });

  if(result.error) {
    console.log(chalk.red(result.error));
  } else {
    console.log(chalk.green(req.path));
  }

});

App.listen(port, () => {
	console.log("Server Running!");
});
