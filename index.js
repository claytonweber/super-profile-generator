const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
//native
const fs = require('fs');

//empty to start
let employeeList = {
  manager: "",
  engineers: [],
  interns: []
};


//prompt manager questions then ask if another employee should be added
init = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the manager\'s name?'
    },
    {
      type:'input',
      name: 'id',
      message: 'What is the manager\'s employee id number?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the manager\'s email?'
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the manager\'s office number?'
    }
  ])
  .then((data) => {
    employeeList.manager = new Manager(data.name, data.id, data.email, data.officeNumber);
  })
  .then(() => newEmployee());
}

//ask questions based on the selection - if no is selected write the html file
newEmployee = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'employee',
      message: 'Do you want to hire a new employee?',
      choices: ['Engineer', 'Intern', 'No']
    }
  ])
  .then((selection) => {
    if(selection.employee === 'Engineer') {
      engineerQs();
    } else if(selection.employee === 'Intern') {
      internQs();
    } else {
      cardMaker();
    }
  })
}

engineerQs = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'engName',
      message: 'What is the engineer\'s name?'
    },
    {
      type:'input',
      name: 'engId',
      message: 'What is the engineer\'s id number?'
    },
    {
      type: 'input',
      name: 'engEmail',
      message: 'What is the engineer\'s email?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is the engineer\'s github username?'
    }
  ])
  .then((data) => {
    employeeList.engineers.push(new Engineer(data.engName, data.engId, data.engEmail, data.github));
    newEmployee();
    console.log(employeeList);
  })
}

internQs = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'internName',
      message: 'What is the intern\'s name?'
    },
    {
      type:'input',
      name: 'internId',
      message: 'What is the intern\'s id number?'
    },
    {
      type: 'input',
      name: 'internEmail',
      message: 'What is the intern\'s email?'
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school does the intern attend?'
    }
  ])
  .then((data) => {
    employeeList.interns.push(new Intern(data.internName, data.internId, data.internEmail, data.school));
    newEmployee();
    console.log(employeeList);
  })
}



let cards = [];
function engCard(engineer) {
  cards.push(`<div class="card">
    <h2>${engineer.name}</h2>
    <h2>${engineer.getRole}</h2>
    <h4>${engineer.id}</h4>
    <h4>${engineer.email}</h4>
    <h4>${engineer.github}</h4>
  </div>`)
}

function intCard(intern) {
  cards.push(`<div class="card">
    <h2>${intern.name}</h2>
    <h2>${intern.getRole}</h2>
    <h4>${intern.id}</h4>
    <h4>${intern.email}</h4>
    <h4>${intern.school}</h4>
  </div>`)
}

const generateHTML = (data) => {
 return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="./style.css">
    </head>
    <body>
    <header><h1>${employeeList.manager.getName()}'s' Team</h1></header>

    <main>
      <div class="card" id="manager-card">
      <h2>${employeeList.manager.name}</h2>
      <h4>${employeeList.manager.getRole()}</h4>
      <h4>${employeeList.manager.id}</h4>
      <h4>${employeeList.manager.email}</h4>
      <h4>${employeeList.manager.officeNumber}</h4>
      </div>
      ${cards}
    </main>
    <div class="card"></div>
    </body>
    </html>`
  
}

function cardMaker(employee) {
  for(i=0; i<employeeList.engineers.length; i++) {
    engCard(employeeList.engineers[i]);
  }

  for(j=0; j<employeeList.interns.length; j++) {
    intCard(employeeList.interns[j]);
  }
  generateHTML();
  fs.writeFileSync('./dist/index.html', generateHTML(employee));
}



init();