// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// User chooses license from a list of options, then it's displayed
function renderLicenseSection(license) {
  if(license === "Apache") {
    return `Apache License
    Version 2.0, January 2004 
    A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
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
* [Credits](#credits)
* [License](#license)


## Installation




## Usage 




## Credits




## License

${renderLicenseSection(data.license)}



## Badges




## Features



## Contributing



## Tests



  `;
}

module.exports = generateMarkdown;
