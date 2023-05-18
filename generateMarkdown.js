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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (projectLicense === 'None') {
        return ``
      } else
      return `${license} license.`
    }
    

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;