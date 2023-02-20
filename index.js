// fs package to create readme from user input 
const fs = require("fs");

// inquirer package for providing error feedback asking questions, parsing input, validating answers, and managing hierarchical prompts
const inquirer = require("inquirer");

// util to promisify fs.writeFile
const util = require('util');

// access file to generate markdown
const generateMarkdown = require("./utils/generateMarkdown");

// promisify to use async await
const writeReadMe = util.promisify(fs.writeFile);

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
            {   //name displays in terminal, answer returns the value
                name: "Apache 2.0", 
                value: "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",    
            },
            {
                name: "Boost 1.0", 
                value: "[![License: Boost 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",   
            },
            {
                name: "Creative Commons 1.0", 
                value: "[![License: CC 1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
            },
            {
                name: "GNU General Public License v3.0", 
                value: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
            },
            {
                name: "MIT", 
                value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
            },
            {
                name: "Mozilla Public License 2.0",
                value: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
            },
            {
                name: "The Unlicense",
                value: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
            },
            {
                name: "None",
                value: "",
            } 
        ],
    },
    {
        type: "checkbox",
        name: "badges",
        message: "What badges would you like to include include in your README?",
        
        choices: [ //name displays in terminal, answer returns the value
            {
                name: "Maintained: yes",
                value: "![Maintained: yes](https://img.shields.io/badge/maintained-yes-brightgreen)",
            },
            {
                name: "Website: up",
                value: "![Website: up](https://img.shields.io/badge/website-up-brightgreen)",
            },
            {
                name: "Ask me: anything",
                value: "![Ask me: anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)",
            },
            {
                name: "Made with: Markdown",
                value: "![Made with: Markdown](https://img.shields.io/badge/made%20with-Markdown-blue)",
            },
            {
                name: "Made with: JavaScript",
                value: "![Made with: JavaScript](https://img.shields.io/badge/made%20with-JavaScript-blue)",
            },
            {
                name: "Contributor Covenant: 2.1",
                value: "[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)",
            }
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
            //user must enter a valid email format 
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer);
            if (valid) {
                return true;
            } else if (answer === "") {
                return "This question cannot go unanswered!";
            }
            return "Please enter a valid email address";
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

//wrap inquirer to initialize w init()
function init () {
    inquirer
        //pass in array of questions
      .prompt(questions)
      // then passin answeres to writeToFileFuntion (promise)
      .then((answers) => {
        console.log("YOUR README: ", answers)
        writeToFile(answers);
    })
} 



async function writeToFile(answers) {
    try { //try to fullfil promise or throw err
        
        //connect answers to the README template in generateMarkdown.js
        let readMeInput = generateMarkdown(answers);
        // once readMeInput is available, create new README.md and render it
        await writeReadMe('./generated/README.md', readMeInput);
        console.log("README SUCCESSFULLY CREATED");
    } catch (err) {
        throw err;
    }
}

// call init function with inquirer inside
init();
