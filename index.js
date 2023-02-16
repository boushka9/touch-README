// fs package to create readme from user input 
const fs = require("fs");

// inquirer package for providing error feedback asking questions, parsing input, validating answers, and managing hierarchical prompts
const inquirer = require("inquirer");

// access file to generate markdown
const generateMarkdown = require("./utils/generateMarkdown");

// array containing question prompts
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: (answer) => {
            if (answer === "") {
                return "This question cannot go unanswered!";
            }
            return true;
        },
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description of your project. Why did you build this project? What problem does it solve? What did you learn?",
        validate: (answer) => {
            if (answer === "") {
                return "This question cannot go unanswered!";
            }
            return true;
        },
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. If no installation is required, enter the link to your application.",
        validate: (answer) => {
            if (answer === "") {
                return "This question cannot go unanswered!";
            }
            return true;
        },
    },
    {
        type: "input",
        name: "usage",
        message: "Provide detailed instructions and examples for how to use your application.",
        validate: (answer) => {
            if (answer === "") {
                return "This question cannot go unanswered!";
            }
            return true;
        },
    },
    {
        type: "input",
        name: "credits",
        message: "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.",
        default: "N/A",
    },
    {
        type: "list",
        name: "license",
        message: "What license did you use for your project?",
        choices: [
            "Academic Free License v3.0", //afl-3.0
            "Artistic license 2.0", //artistic-2.0
            "Do What The F*ck You Want To Public License", //wtfpl
            "GNU General Public License v3.0", //gpl-3.0
            "Microsoft Public License", //ms-pl
            "MIT", //mit
            "Open Software License 3.0", //osl-3.0
            "The Unlicense", //unlicense
        ],
    },
    {
        type: "checkbox",
        name: "badges",
        message: "What badges would you like to include include in your README?",
        
        choices: [
            "Maintained: yes",
            // https://img.shields.io/badge/maintained-yes-brightgreen
            "Website: up",
            // https://img.shields.io/badge/website-up-brightgreen
            "Ask me: anything",
            // https://img.shields.io/badge/ask%20me-anything-1abc9c.svg
            "Made with: Markdown",
            // https://img.shields.io/badge/made%20with-Markdown-blue
            "Made with: JavaScript",
            // https://img.shields.io/badge/made%20with-JavaScript-blue
            "Contributor Covenant: 2.1"
            // [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
        ],
        default: "N/A",
    },
    {
        type: "input",
        name: "contribute",
        message: "How should others contribute to your application? ",
        default: "N/A",
    },
    {
        type: "input",
        name: "tests",
        message: "What tests did you write for your code? Include step by step instructions on how to run them.",
        default: "N/A",
    },
    {
        type: "input",
        name: "email",
        message: "Provide an email address for others to contact you with questions about your application.",
        validate: (answer) => {
            if (answer === "") {
                return "This question cannot go unanswered!";
            }
            return true;
        },
    },
    {
        type: "input",
        name: "username",
        message: "Input your gitHub username.",
        validate: (answer) => {
            if (answer === "") {
                return "This question cannot go unanswered!";
            }
            return true;
        },
    }
]

inquirer
    //pass in array of questions
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


  
// TODO: Create a function to write README file 
function writeToFile(fileName, input) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
