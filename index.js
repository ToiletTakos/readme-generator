// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your Project Title? (Required)',
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('Please enter your Project Title!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'about',
            message: 'Enter a description About the Project? (required)',
            validate: aboutInput => {
                if (aboutInput) {
                  return true;
                } else {
                  console.log('Please enter description about your Project!');
                  return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTable',
            message: 'Would you like to have a Table of Contents?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (required)',
            validate: installationInput => {
                if (installationInput) {
                  return true;
                } else {
                  console.log('Please enter the installation procedure!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for use. (required)',
            validate: usageInput => {
                if (usageInput) {
                  return true;
                } else {
                  console.log('Please enter usage instructions and examples!');
                  return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmCollaborators',
            message: 'Do you want to enter any collaborators?',
            default: true
        },
        {
            type: 'input',
            name: 'collaborators',
            message: 'Provide a list of collaborators.',
            when: ({ confirmCollaborators }) => confirmCollaborators
        },
        {
            type: 'confirm',
            name: 'confirmThirdParty',
            message: 'Do you want to enter any Third-Party assets?',
            default: true
        },
        {
            type: 'input',
            name: 'thirdParty',
            message: 'Provide a list of Third-Party assets used.',
            when: ({ confirmThirdParty}) => confirmThirdParty
        },
        {
            type: 'confirm',
            name: 'confirmTutorials',
            message: 'Do you want to enter any tutorials used?',
            default: true
        },
        {
            type: 'input',
            name: 'tutorials',
            message: 'Provide a list of the Tutorials used.',
            when: ({ confirmTutorials }) => confirmTutorials
        }
    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return new err
        }

        console.log('README.md file created')
    })
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(data => {
        console.log(data)
        return generateMarkdown(data);
    })
    .then(returned => {
        writeToFile('./dist/README.md', returned)
    })
    .catch(err => {
        console.log(err);
    });
}

// Function call to initialize app
init();