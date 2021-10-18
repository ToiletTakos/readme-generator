// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;
    switch (license) {
        case "MIT":
            licenseBadge = "[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
        case "APACHE-2.0":
          licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)"
            break;
        case "GPL 3.0":
          licenseBadge = "[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            break;
        case "Mozilla 2.0":
          licenseBadge = "[![License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
            break;
        case "None":
          licenseBadge = "";
            break;
        default:
          licenseBadge = "";
            break;
    }
    return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
    switch (license) {
        case "MIT":
            licenseLink = "https://opensource.org/licenses/MIT";
            break;
        case "APACHE-2.0":
            licenseLink = "https://opensource.org/licenses/Apache-2.0";
            break;
        case "GPL 3.0":
            licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
            break;
        case "Mozilla 2.0":
            licenseLink = "https://opensource.org/licenses/MPL-2.0";
            break;
        case "None":
            licenseLink = "";
            break;
        default:
            licenseLink = "";
            break;
    }
    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''
  }

  return `${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}`
}

//Create the table of contents if requested
const generateTable = confirmTable => {
  if (!confirmTable) {
    return '';
  }

  return `
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  `;
};

// create credits check
const credits = confirmCredits => {
  if (!confirmCredits) {
    return 'None used.';
  }

  return `
  ${confirmCredits}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseSection(data.license)}

  ## Description

  ${data.about}

  ${generateTable(data.confirmTable)}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  Collaborators: ${credits(data.collaborators)}
  Third-Party assets: ${credits(data.thirdParty)}
  Tutorials: ${credits(data.tutorials)}

  ## Questions

  If you have any questions you can reach me at my email: ${data.email}
  If you want to see some of my other works checkout my github: https://github.com/${data.github}

 `;
}

module.exports = generateMarkdown;
