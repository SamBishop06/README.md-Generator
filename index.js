// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "what is the Title of your project?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your title!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please give a brief description of your project",
        validate: descriptInput => {
            if (descriptInput) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "describe how to use app?",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your insturtions!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "List installation intructions, if any",
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Pleaes enter installation insturtions!');
                return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license for this project",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Apache 2.0",
            "Boost Software 1.0",
            "MIT",
            "Mozilla",
        ],
    },
    {
        type: "input",
        name: "contributing",
        message: "how can usuers contribute to your project",
        validate: contributerInput => {
            if (contributerInput) {
                return true;
            } else {
                console.log('Please enter contributer guidelines!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: ("Please enter testing instructions for project!"),
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter test instructions!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "username",
        message: ("What is your GitHub Username!"),
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    // Email adress questions 
    {
        type: "input",
        name: "email",
        message: ("What is your GitHub contact email!"),
        validate: function (value) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                return true;
            } else {
                return "Please enter valid email address!";
            }
        },
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);
        console.log("Readme Generated! Go to readme.md to see it!")
    })
};

// TODO: Create a function to initialize app
function init() {console.log(`
Answer the following questions to generate your README.md file
`);

inquirer.prompt(questions)
.then(readmeData => {
    writeToFile("./utils/readme.md", generateMarkdown(readmeData))
})}


// Function call to initialize app
init();
