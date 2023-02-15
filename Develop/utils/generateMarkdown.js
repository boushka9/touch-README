// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to generate README with users input
function generateMarkdown(input) {
  return `# ${input.title} 

  ## Description

  ${input.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ${input.installation}

  ## Usage

  ${input.usage}

  ## Credits

  ${input.credits}

  ## License

  ${input.license}

  ---

  ## Badges

  ${input.badges}

  ## How to Contribute

  ${input.contribute}

  ## Tests

  ${input.tests}

  ## Questions

  If you have any questions regarding this application, you can contact me at:

  ${input.email}

  ${input.gitusername}

  `;
}

module.exports = generateMarkdown;
