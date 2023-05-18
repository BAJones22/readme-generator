function generateMarkdown(answers) {
  // Function that returns a license badge based on which license is passed in
  // If there is no license, return an empty string
  function renderLicenseBadge(projectLicense) {
    switch (projectLicense) {
      case "MIT":
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      case "Apache 2.0":
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      case "BSD 3":
        return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      case "None":
        return "";
    }
  }

  // Function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(projectLicense) {
    if (projectLicense === "None") {
      return ``;
    } else return `${projectLicense} license.`;
  }

  // Function to generate markdown for README

  return `# ${answers.projectName}

  ${renderLicenseBadge(answers.projectLicense)}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description

${answers.projectDescription}

## Installation

${answers.projectInstallation}

## Usage

${answers.projectUsage}

     
## Contributing

${answers.projectContribute}

## Tests

${answers.projectTests}

## Questions

You can reach me at ${
    answers.userEmail
  } regarding any questions, concerns or comments you may have. Find me on GitHub at (https://github.com/${
    answers.userGitHub
  })

`;
}

module.exports = { generateMarkdown };
