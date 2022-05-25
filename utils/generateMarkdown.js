// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "Apache-2.0") {
    return "[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL-v3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
  } else {
    // If there is no license, return an empty string
    return "";
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache-2.0") {
    return '[Apache-2.0 License Link](https://choosealicense.com/licenses/apache-2.0/)';
  } else if (license === "GPL-v3.0") {
    return '[GPL-v3.0 License Link](https://choosealicense.com/licenses/gpl-3.0/)';
  } else if (license === "MIT") {
    return '[MIT License Link](https://choosealicense.com/licenses/mit/)';
  } else {
    return ``;
  }
}

// function that returns the license section of README
// User chooses license from a list of options, then it's displayed
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "Apache-2.0") {
    return `Apache License
    Version 2.0, January 2004 
    A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  } else if (license === "GNU GPL-v3.0") {
    return `GNU GENERAL PUBLIC LICENSE
    Version 3, 29 June 2007
    Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`;
  } else if (license === "MIT") {
    return `MIT License
    A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  } else {
    return ``;
  }
}

// function to generate markdown for README

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

${renderLicenseLink(data.license)}


## Badges

${renderLicenseBadge(data.license)}


### Questions

Have more questions about this application? Contact me on GitHub or send an email to 
${data.email}.


  `;
}

module.exports = generateMarkdown;
