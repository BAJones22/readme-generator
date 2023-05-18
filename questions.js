// Array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "projectName",
  },
  {
    type: "input",
    message: "Please give a description of your project:",
    name: "projectDescription",
  },
  {
    type: "input",
    message: "Please provide any instructions required for installation of application:",
    name: "projectInstallation",
  },
  {
    type: "input",
    message: "Please provide information regarding the usage of your application:",
    name: "projectUsage",
  },
  {
    type: "input",
    message: "Please detail any guidelines you wish to provide for contributions to your project:",
    name: "projectContribute",
  },
  {
    type: "input",
    message: "Please provide instructions on how to run all necessary tests:",
    name: "projectTests",
  },
  {
    type: "list",
    message: "Please select the type of license your project will contain:",
    choices: ['MIT', 'Apache 2.0', 'BSD 3', 'None'],
    name: "projectLicense",
  },
  {
    type: "input",
    message: "Please provide your GitHub user name:",
    name: "userGitHub",
  },
  {
    type: "input",
    message: "Please provide your email address:",
    name: "userEmail",
  }
];

module.exports = { questions };
