const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output")


const outputPath = path.join(OUTPUT_DIR, "team.html");
const createHtml = require("./source/cardtemplate");

// Team Array
const teamArray = [];


function init() {
  function makeManager() {
    console.log("Please build your team");
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is your manager's name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is your manager's id?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your manager's email?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is your manager's office number?",
      }
    ])

    .then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      teamArray.push(manager);
      createTeam();
    });
  }

    // make team members starting at function make manager through 52
    function makeEngineer() {
      console.log("Please build your team");
      inquirer.prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is your engineer's name?",
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is your engineer's id?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is your engineer's email?",
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is your engineer's GitHub username?",
        }
      ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        createTeam();
      });
    }

    function makeIntern() {
      console.log("Please build your team");
      inquirer.prompt([
        {
          type: "input",
          name: "internName",
          message: "What is your intern's name?",
        },
        {
          type: "input",
          name: "internId",
          message: "What is your intern's id?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is your intern's email?",
        },
        {
          type: "input",
          name: "internSchool",
          message: "What is your school name?",
        }
      ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamArray.push(intern);
        createTeam();
      });
    }
  
  function createTeam() {
    inquirer.prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members"
        ]
      }
    ]).then(function (userChoice) {
      switch (userChoice.memberChoice) {
        case "Engineer":
          makeEngineer();
          break;
        case "Intern":
          makeIntern();
          break;
        default:
          buildTeam();
      }
    });
  }
  function buildTeam() {
    fs.writeFileSync(outputPath, createHtml(teamArray), "utf-8");
  }

  makeManager();
}
init();











