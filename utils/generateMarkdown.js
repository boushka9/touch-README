// If user selects 'None', add unlicenced msg
// Otherwise, take the 'value' of the selected license and split @the end and begining of the license name to retun just the name
function renderLicense(license) {
  if (license === "") {
    return "This project is not licensed.";
  } else {
    let licenseValue = license.split("](");
    licenseName = licenseValue[0].split("License: ").pop();
  
    return `This project is licensed under the terms of the ${licenseName} license`;
  }
}

// Function to generate README with users answers
function generateMarkdown(answers) {
  return `# ${answers.title} 

  ${answers.license}

  ## Description

  ${answers.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ${answers.installation}

  ## Usage

  ${answers.usage}

  ## Credits

  ${answers.credits}

  ## License

  ${renderLicense(answers.license)} 

  ---

  ## Badges

  ${answers.badges.join("  ")}

  ## How to Contribute

  ${answers.contribute}

  ## Tests

  ${answers.tests}

  ## Questions

  If you have any questions regarding this application please contact me through email or GitHub:

  ${answers.email}

  ${answers.username}

  `;
}

module.exports = generateMarkdown;
