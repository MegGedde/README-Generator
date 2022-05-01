var license = [
  {
    name: 'Apache License 2.0',
    link: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    description: 'This repository is licensed under Apache License 2.0 which grants patent rights.',
  },{
    name: 'MIT',
    link: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    description: "This repository is licensed under MIT. The MIT license expresses permission to reuse code for any purpose, however the original copy of the MIT license in distribution.",
  }, {
    name: 'SIL Open Font License 1.1',
    link: '[![License: Open-Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)',
    description: "This repository is licensed under SIL Open Font License 1.1. Permission is hereby granted, free of charge, to any person obtaining a copy of the Font Software, to use, study, copy, merge, embed, modify, redistribute, and sell modified and unmodified copies of the Font Software,",
  }, {
    name: 'zLib License',
    link: '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)',
    description: "This repository is licensed under zLib License. This Software is used on 'as-is' basis. Authors are not liable for any damages arising from its use.",
  }

]
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  for (let i=0; i < license.length; i++) {
    if(data.licenses === license[i].name) {
      return license[i].name;
    } else {
      return "";
    }
  }}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  for (let i = 0; i < license.length; i++) {
    if(data.licenses === license[i].name) {
      return license[i].link;
    } else {
      return "";
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  for (let i = 0; i < license.length; i++) {
    if(data.licenses === license[i].name) {
      return license[i].description;
    } else {
      return "None";
    }
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseLink(data)}

  ## Table of Contents
  1. [Description](#description)
  2. [Instalation Instructions](#instalation-instructions)
  3. [Usage](#usage)
  4. [Contributors](#contributors)
  5. [Testing Instructions](#testing-instructions)
  6. [Licensing](#licensing)
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

  ## Licensing
  ${renderLicenseBadge(data)}

  ${renderLicenseSection(data)}

  ## Questions

  If you have any questions about this repository, please contact my [github account](https://github.com/${data.github})
  or [email me](${data.email}).
`;
}

module.exports = generateMarkdown;

