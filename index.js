const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

function writeToFile(fileName, answers) {
    let svgLogo = ''
    svgLogo = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>'
    
    svgLogo += '<s>'
    svgLogo += '${answers.Shape}'

    let choices
    if (answer.Shape === 'Circle') {
        choices = new Circle()
        svgLogo += `<circle cx="150" cy="100" r="80" fill="${answers.background}" />`

    } else if (answers.Shape === 'Square') {
        choices = new Square()
        svgLogo += `<square width="800px" height="800px" viewBox="0 0 15 15" fill="${answers.background}">`
    }
    else choices = new Triangle()
        svgLogo += `<polygon points width="800px" height="800px" viewBox="0 0 15 15" fill="${answers.background}">`
    
}

svgLogo +=  `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.color}">${answers.display}</text>`
svgLogo += '</s>'

fs.writeFile(filename, svgLogo, (err) => {
    err ? console.log(err) : console.log('SVG Logo has been completed')
})

function inIt() {
    inquirer
    .prompt([
   
        {
          type: "input",
          message:
            "What three letters would you like displayed? (Enter up to three characters)",
          name: "display",
        },
     
        {
          type: "input",
          message:
            "Choose your color for the text (Enter color keyword)",
          name: "color",
        },
      
        {
          type: "list",
          message: "Choose your shape",
          choices: ["Circle", "Square", "Triangle"],
          name: "shape",
        },
      
        {
          type: "input",
          message:
            "Choose your color for the background (Enter color keyword)",
          name: "background",
        },
      ])


.then((answers) => {
    if (answers.display.length > 3) {
        console.log('Please enter only 3 letters')
        inIt()
    } else {
        writeToFile('Logo.svg', answers)
    }
})
}

inIt()