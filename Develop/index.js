// fs package to create readme from user input 
const fs = require("fs");

// inquirer package for providing error feedback asking questions, parsing input, validating answers, and managing hierarchical prompts
const inquirer = require("inquirer");

// access file to generate markdown
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        prompt: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        prompt: "Provide a short description of your project. Why did you build this project? What problem does it solve? What did you learn?",
    },
    {
        type: "input",
        name: "installation",
        prompt: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
    },
    {
        type: "input",
        name: "usage",
        prompt: "Provide detailed instructions and examples for how to use your application."
    },
    {
        type: "input",
        name: "credits",
        prompt: "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.",
    },
    {
        type: "input",
        name: "license",
        prompt: "What license did you use for your project?",
        options: [
            "afl-3.0",
            "artistic-2.0",
            "wtfpl",
            "agpl-3.0",
            "ms-pl",
            "mit",
            "osl-3.0",
            "unlicense",
        ],
    },
    {
        type: "input",
        name: "badges",
        prompt: "What badges would you like to include include in your README?",
        
        options: [
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
        ]
    },
    {
        type: "input",
        name: "contribute",
        prompt: "How should others contribute to your application? ",
    },
    {
        type: "input",
        name: "tests",
        prompt: "What tests did you write for your code? Include step by step instructions on how to run them.",
    },
    {
        type: "input",
        name: "email",
        prompt: "Provide an email address for others to contact you with questions about your application.",
    },
    {
        type: "input",
        name: "username",
        prompt: "Input your gitHub username."
    }
];

// TODO: Create a function to write README file 
function writeToFile(fileName, input) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
