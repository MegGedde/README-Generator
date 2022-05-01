// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?'
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the installation instructions?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage information?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who contributed to the project?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instructions?'
        },
        {
            type: 'list',
            name: 'licenses',
            message: 'What licenses were used (check all that apply)?',
            choices: ['Apache License 2.0','MIT','SIL Open Font License 1.1','zLib License']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        }
    ])
    .then((data) => {
        console.log(data);
        const createFile = generateMarkdown(data);
        fs.writeFile('./dist/README.md', createFile, err => {
          if (err) {
            reject(err);
            return;
          } else {
            console.log('File created!');
          };
        })
    });


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// Function call to initialize app
// init();
