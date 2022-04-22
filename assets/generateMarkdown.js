// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}



// TODO: Create a function that returns the license section of README
// User chooses license from a list of options, then it's displayed
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if(license === "Apache-2.0") {
    return `Apache License
    Version 2.0, January 2004 
    A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  } 
  else if(license === "GNU") {
    return `GNU GENERAL PUBLIC LICENSE
    Version 3, 29 June 2007
    Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`

  } 
    else if(license === "MIT") {
    return `MIT License
    A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
  else {
    return ``;
  }
}




// TODO: Create a function to generate markdown for README

// title of their project 
// sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// added to page with the user input

function generateMarkdown(data) {
  return `# ${data.title}


## Description 

${data.description}



## Table of Contents 



* [Installation](#installation)
* [Usage](#usage)
* [Features](#features)
* [Credits](#credits)
* [Tests](#tests)
* [License](#license)
* [GitHub](#github)


## Installation

${data.install}



## Usage 

${data.usage}


## Features

${data.features}


## Credits

${data.credits}

Link to GitHub [${data.github}](https://github.com/${data.github})


## Tests

${data.tests}



## License

${renderLicenseSection(data.license)}


## Badges



### Questions

Have more questions about this application? Contact me on GitHub or send an email to ${data.email}.

  `;
};

module.exports = generateMarkdown;
