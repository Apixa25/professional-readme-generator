// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) => {
      if (err) {
        console.error(err);
      }
      console.log(`README.md has been generated successfully.`);
    });
  }

// TODO: Create a function to initialize app
// Function to generate the README content based on user input
 
// Prompt the user for input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the Title of the project? ',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe the project to me, what was your motivation for building it? ',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Tell me how to install this application. ',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is this application used for? ',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Do you want to license this? If so pick one:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'ISC', 'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Explain to people how they can contribute to this project. ',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Go the extra mile and write tests for the aplication and give examples how to run them! ',
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username? ',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address? ',
    },
  ])

//   // Function call to initialize app
// init();