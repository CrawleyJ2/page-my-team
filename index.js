// modules required
const inquirer = require('inquirer');
const fs = require('fs');

// sources
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// html template
// empty array for employee forms
const employeeArray = [];

// questions to ask
const employeeForm = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee\'s full name?',
        validate: nameEntry => {
            if (nameEntry) {
                return true;
            } else {
                console.log('Employee name is required.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee\'s ID number?',
        validate: idEntry => {
            if (!isNaN(parseInt(idEntry))) {
                return true;
            } else {
                console.log('Valid ID number is required.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employee\'s email address?',
        validate: emailEntry => {
            if (emailEntry) {
                return true;
            } else {
                console.log('An email address is required.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is the employee\'s role? Select one of the following options:',
        choices: 
            () => {
                if (employeeArray.some(employee => employee.role === 'Manager')) {
                    return ['Engineer', 'Intern']
                } else {
                    return ['Manager', 'Engineer', 'Intern']
                }
            }
    },
    // if manager, ask for office number,
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the Manager\'s office phone number?',
        when: ({ role }) => {
            if (role === 'Manager') {
                return true;
            } else {
                return false;
            }
        }
    },
    // if engineer, ask for github username,
    {
        type: 'input',
        name: 'github',
        message: 'What is the Engineer\'s GitHub username?',
        when: ({ role }) => {
            if (role === 'Engineer') {
                return true;
            } else {
                return false;
            }
        }
    },
    // if intern, ask for school info,
    {
        type: 'input',
        name: 'school',
        message: 'What school does this Intern go to?',
        when: ({ role }) => {
            if (role === 'Intern') {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Would you like to add another employee?',
        default: true
    },
]

const userPrompt = () => {
    return inquirer.prompt(employeeForm)
    .then(responseData => {
        // pushes employee data to array
        employeeArray.push(responseData);
        // if selected to add another employee
        if (responseData.addEmployee) {
            return userPrompt();
        } else {
            return employeeArray;
        };
    });
};

// function to write file with html template
const pageCreation = (pageContent) => {
    fs.writeFile('./dist/index.html', pageContent, err => {
        if (err) {
            throw err
        };
        console.log ('Team Profile Page created in dist folder!');
    });
};
// intro welcome message via console log
console.log(`Welcome to the Team Profile Page Maker!`);

userPrompt()
    // .then push data to generate page
    // .then([pendinghtml]) => pageCreation([pendinghtml])
    // .catch(err => console.log(err));