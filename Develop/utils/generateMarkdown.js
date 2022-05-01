var license = [
  {
    name: 'Apache License 2.0',
    link: [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0),
    description: ";",
  },{
    name: 'MIT',
    link: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT),
    description: ";",
  }, {
    name: 'SIL Open Font License 1.1',
    link: [![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1),
    description: ";",
  }, {
    name: 'zLib License',
    link: [![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib),
    description: ";",
  }

]
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  for (let i=0; i < license.length; i++) {
    if(data.license == badge[i].name) {
      return license.link;
    } else {
      return "none";
    }
  }}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   for (let i=0; i < license.length; i++) {
//     if(data.license == badge[i].name) {
//       return data.link;
//     } else {
//       return "none";
//     }
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  for (let i=0; i < license.length; i++) {
    if(data.license == badge[i].name) {
      return lciense.description;
    } else {
      return "none";
    }
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data)}

  ## Table of Contents
  1. [Description](#description)
  2. [Instalation Instructions](#instalation-instructions)
  3. [Usage](#usage)
  4. [Contributors](#contributors)
  5. [Testing Instructions](#testing-instructions)
  6. [Licenses Used](#licenses-used)
  7. [Questions](#questions)

  ## Description
  ${data.description}

  ## Instalation Instructions
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contribution}

  ## Testing Instructions
  ${data.test}

  ## Licenses Used
  ${renderLicenseSection(data)}

  ## Questions

  If you have any questions about this repository, please contact my [github account](https://github.com/${data.github})
  or [email me](${data.email}).
`;
}

module.exports = generateMarkdown;

