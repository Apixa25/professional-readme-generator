//not sure if I need to put these in here but will for safety sake. Redundant?
const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badge = '';
    if(license === 'MIT') {
        badge = '![GitHub license](https://img.shields.io/badge/License-MIT-yellow.svg)'
    } else if (license === 'Apache 2.0') {
        badge = '![license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
    } else if (license === 'GPL 3.0') {
        badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    } else {
        badge = ''
    }
    return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink = '';
    if(license === 'MIT') {
        licenseLink = 'https://opensource.org/licenses/MIT'
    } else if (license === 'Apache 2.0') {
        licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
    } else if (license === 'GPL 3.0') {
        licenseLink = 'https://www.tldrlegal.com/license/gnu-general-public-license-v3-gpl-3'
    } else {
        licenseLink = ''
    }
    return licenseLink;
}


// TODO: Create a function to generate markdown for README
//this is what is generating the markdown for the README and should be in the generate markdown
function generateMarkdown(answers) {
    return `
  # ${answers.title}
  
  ## Description
  ${answers.description} 

  ${renderLicenseBadge(answers.license)}
  ${renderLicenseLink(answers.license)}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## License
  This project is licensed under the ${answers.license} license.
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  For any questions, please contact [${answers.username}](https://github.com/${answers.username}) or email at ${answers.email}.
  `;
  }

module.exports = generateMarkdown;