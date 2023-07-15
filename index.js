// // Packages and Modules needed
// const inquirer = require('inquirer');
// const fs = require('fs');
// const { Square,Circle, Triangle } = require('./lib/shapes.js')
// const {createdSVG} = require('./lib/createdSVG')

// // Array of questions for user input
// const questions = [
//     {
//         type: 'maxlength-input',
//         name: 'text',
//         message: "Please enter the text in the logo (Max 3 characters).",
//         maxLength: 3,
//     },
//     {
//         type: 'input',
//         name: 'textColor',
//         message: "Enter text color ",
//     },
//     {
//         type: 'list',
//         name: 'shape',
//         message: "Please select a shape for your logo",
//         choices: ['Circle', 'Triangle', 'Square']
//     },
//     {
//         type: 'input',
//         name: 'shapeColor',
//         message: "Enter shape color ",
//     },
// ];


// function start() {
//     inquirer
//         .prompt(questions)
//         .then((response) => {
//             let logoShape; 
//             switch (response.shape) {
//                  case 'Square':
//                     logoShape = new Square()
//                     break;
//                 case 'Circle':
//                     logoShape = new Circle()
//                     break;
//                 case 'Triangle': 
//                     logoShape = new Triangle()
//                     break;
//             }
//             logoShape.setColor(response.shapeColor)
//             logoShape.setText(response.text)
//             logoShape.setTextColor(response.textColor)
//                 fs.writeFile("final.svg", createdSVG(logoShape.render()), (err) =>
//                 err ? console.log(err) : console.log("Successfully created index.html!")
//               );
//                 })}
//                 start();
            
          
// Packages and Modules needed
const inquirer = require('inquirer');
const fs = require('fs');
const { Square, Circle, Triangle } = require('./lib/shapes.js');
const { createdSVG } = require('./lib/createdSVG');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Please enter the text in the logo (Max 3 characters).',
    validate: (input) => {
      if (input.length <= 3) {
        return true;
      }
      return 'Text must be maximum 3 characters.';
    },
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color: ',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Please select a shape for your logo',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color: ',
  },
];

function start() {
  inquirer.prompt(questions).then((response) => {
    let logoShape;
    switch (response.shape) {
      case 'Square':
        logoShape = new Square();
        break;
      case 'Circle':
        logoShape = new Circle();
        break;
      case 'Triangle':
        logoShape = new Triangle();
        break;
    }
    logoShape.setColor(response.shapeColor);
    logoShape.setText(response.text);
    logoShape.setTextColor(response.textColor);
    fs.writeFile('final.svg', createdSVG(logoShape.render()), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Successfully created final.svg!');
      }
    });
  });
}

start();


