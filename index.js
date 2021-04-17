const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const generateHTML = require('./generatePage.js')
const fs = require('fs');


const info = []

function addTeam() {
    inquirer.prompt([{

        message: "Please enter team member's name",
        name: 'name'
    },
    {
        message: "What is the employee's ID Number?",
        name: 'id'
    },
    {
        message: "Enter team member's email address:",
        name: 'email'
    },
    {
        type: 'list',
        message: "select the team member's role:",
        name: 'role',
        choices: [
            'Engineer',
            'Intern',
            'Manager'
        ]
    }
    ])
    .then(({ name, id, email, role }) => {
        if (role === 'Engineer') {
            return inquirer
                .prompt([
                    {
                        type: 'text',
                        name: 'github',
                        message: 'What is their github Username?'
                    },
                    {
                        type: 'confirm',
                        name: 'next',
                        message: 'would you like to add more employees?'
                    },

                ])
                .then(({github, next}) => {
                    info.push(new Engineer(name, id, email, github))

                    if (next) {
                        return addTeam()
                    }
                })
        } else if (role === "Intern") {
            return inquirer 
                .prompt ([
                    {
                        type: 'text',
                        name: 'school',
                        message: 'What school are they currently attending?'
                    },
                    {
                        type: 'confirm',
                        name: 'next',
                        message: 'would you like to add more employees?'
                    },
                ]).then(({school, next }) => {
                    info.push(new Intern(name, id, email, school))
                    if (next) {
                        return addTeam()
                    }
                })
        } else if (role === "Manager") {
            return inquirer 
                .prompt ([
                    {
                        type: 'text',
                        name: 'office',
                        message: 'What is their office number?'
                    },
                    {
                        type: 'confirm',
                        name: 'next',
                        message: 'would you like to add more employees?'
                    },
                ]).then(({ office, next }) => {
                    let manager = new Manager(name, id, email, office)
                    info.push(manager)
                    if (next) {
                        return addTeam()
                    }
                })
        }
    })
    .then(data => {
        return generateHTML(info)
    })
    .then(htmlFile => {
        fs.writeFile('./index.html', htmlFile, err => {
            if(err) {
                rejects(err)
                return;
            }
        })
    })
}

addTeam()

