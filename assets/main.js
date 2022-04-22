// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// prompt user for info about their application repository


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter the title of your application",
        name: "title"
    },

    {
        type: "input",
        message: "Enter a short description of your application",
        name: "description"
    },

    {
        type: "input",
        message: "Enter the required installation instructions for your application",
        name: "install"
    },

    {
        type: "input",
        message: "Enter project use instructions:",
        name: "usage"
    },

    {
        type: "input",
        message: "List all Contributing Authors",
        name: "credits"
    },

    {
        type: "list",
        message: "Select a License from the list",
        name: "license",
        choices: ["Apache", "GNU", "MIT"]
    },
    
    {
        type: "input",
        message: "Enter your GitHub username",
        name: "github"
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('../dist/readme.md', data, function(err) {
        if(err) {
            throw err;
        } else {
            console.log('Success');
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response);
        const data = generateMarkdown(response);
        writeToFile(data);
    });
}

// Function call to initialize app
init();
