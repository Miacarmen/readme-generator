// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter the title of your application",
    name: "title",
  },

  {
    type: "input",
    message: "Enter a short description of your application",
    name: "description",
  },

  {
    type: "input",
    message:
      "Enter the instructions required to install your application and provide a step-by-step description of how to get the development environment running",
    name: "install",
  },

  {
    type: "input",
    message: "Enter usage instructions and examples for your application",
    name: "usage",
  },

  {
    type: "input",
    message: "List the features of your application",
    name: "features",
  },

  {
    type: "input",
    message: "List all Contributing Authors",
    name: "credits",
  },

  {
    type: "input",
    message:
      "Write the tests for your application with examples on how to run them",
    name: "tests",
  },

  {
    type: "list",
    message: "Select a License from the following list:",
    name: "license",
    choices: ["Apache-2.0", "GPL-v3.0", "MIT"],
  },

  {
    type: "input",
    message: "Enter your GitHub username",
    name: "github",
  },

  {
    type: "input",
    message: "Enter your contact email and/or further instructions on how to contact you if a user has questions",
    name: "email",
  },
];

// Function to write README file
function writeToFile(data) {
  fs.writeFile("dist/readme.md", data, function (err) {
    if (err) {
      throw err;
    } else {
      console.log("Success");
    }
  });
}

// Function to initialize app
// prompt user for info about application repository
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    const data = generateMarkdown(response);
    writeToFile(data);
  });
}
// Function call to initialize app
init();
