// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// prompt user for info about their application repository

 inquirer
.prompt([
    {
        type: "input",
        message: "Enter the title of your application",
        name: "title"
    },
    {
        type: "input",
        message: "Enter a description of your application",
        name: "description"
    },
    {
        type: "input",
        message: "Enter the installation instructions for your application",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter ",
        name: ""
    },
    {
        type: "input",
        message: "",
        name: ""
    },
    {
        type: "input",
        message: "",
        name: ""
    },
    {
        type: "input",
        message: "",
        name: ""
    }
])
// TODO: Create an array of questions for user input
const questions = [

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('index.html', data, function(err) {
        if(err) {
            throw err;
        } else {
            console.log('Success');
        }
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
