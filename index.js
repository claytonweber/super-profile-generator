const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
//native
const fs = require('fs');


employeeList = [];

//these questions ask for information shared by all the employees
employeeQs = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the employee'
    },
    {
      type:'input',
      name: 'id',
      message: 'What is the id number of the employee'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the employee\'s email?'
    }
  ])
}

//we are the manager, this only applies to us
misterManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is your office number?'
    }
  ])
}

engineerQ = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'github',
      message: 'What is the engineer\'s github username?'
    }
  ])
}

internQ = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'school',
      message: 'What school does the intern attend?'
    }
  ])
}

newEmployee = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'employee',
      message: 'Do you want to hire a new employee?',
      choices: ['Engineer', 'Intern', 'No']
    }
  ])
}

let cards = [];
const cardHTML = `<div class="card" style="width: 100px; background-color: blue";>`
function generateHTML(data) {
 return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="./style/.css">
    </head>
    <body>
      ${cards}
    </body>
    </html>`
  
}

function cardMaker(employee) {
  cards.push(cardHTML);
}

const init = () => {
  cardMaker();
  employeeQs()
    .then((data) => fs.writeFileSync('./dist/index.html', generateHTML(data)));
}

init();

console.log(employeeList);