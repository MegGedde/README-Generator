// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
    if(data.licenses == 'Apache License 2.0') {
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (data.licenses == 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (data.licenses == 'SIL Open Font License 1.1') {
      return '[![License: Open-Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)';
    } else if (data.licenses == 'zLib License') {
      return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)';
    } else {
      return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(data.licenses == 'Apache License 2.0') {
    return 'This repository is licensed under Apache License 2.0 which grants patent rights.';
  } else if (data.licenses == 'MIT') {
    return 'This repository is licensed under MIT. The MIT license expresses permission to reuse code for any purpose, however the original copy of the MIT license in distribution.';
  } else if (data.licenses == 'SIL Open Font License 1.1') {
    return "This repository is licensed under SIL Open Font License 1.1. Permission is hereby granted, free of charge, to any person obtaining a copy of the Font Software, to use, study, copy, merge, embed, modify, redistribute, and sell modified and unmodified copies of the Font Software.";
  } else if (data.licenses == 'zLib License') {
    return "This repository is licensed under zLib License. This Software is used on 'as-is' basis. Authors are not liable for any damages arising from its use.";
  } else {
    return "";
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseLink(data)}

  ## Description
  ${data.description}

  ## Table of Contents
  1. [Description](#description)
  2. [Instalation Instructions](#instalation-instructions)
  3. [Usage](#usage)
  4. [Contributors](#contributors)
  5. [Testing Instructions](#testing-instructions)
  6. [Licensing](#licensing)
  7. [Questions](#questions)


  ## Instalation Instructions
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contribution}

  ## Testing Instructions
  ${data.test}

  ## Licensing

  ${renderLicenseLink(data)}
  
  ${renderLicenseSection(data)}

  ## Questions

  If you have any questions about this repository, please contact my [github account](https://github.com/${data.github})
  or [email me](${data.email}).
`;
}

module.exports = generateMarkdown;

