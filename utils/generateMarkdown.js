// TODO: Create a function that returns a license badge based on which license is passed in

// Function to render a license badge based on the provided license
// If there's no license, an empty string is returned
function renderLicenseBadge(license) {
let badgeLabel = license.replace(" ", "&ensp;");
  return `
  [![Generic badge](https://img.shields.io/badge/License-${badgeLabel}-green.svg)](${renderLicenseLink(license)})
  `;
}
// TODO: Create a function that returns the license link
  
  // Function to generate a license link
function renderLicenseLink(license) { 
  // Convert license name to lowercase and replace spaces with dashes for URL
  let linkUrl = license.toLowerCase().replace(" ", "-");
  return `https://choosealicense.com/licenses/${linkUrl}/`;
}

// TODO: Create a function that returns the license section of README
// Function to render the license section of the README
// If there's no license, an empty string is returned
function renderLicenseSection(license) {
  if (license === "None") {
      return "";
  } else {
      // Return the license section along with the badge
      return `
### Licensing
${license}
${renderLicenseBadge(license)}
`;
  }
}

  // TODO: Create a function to generate markdown for README
// Function to generate markdown for README
function generateMarkdown(data) {
  return `
# Title: ${data.title}

## Description 
${data.description}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Questions 
Contact info:
[GitHub Username](https://github.com/${data.username})
</br>
[Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;