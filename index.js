const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");

function writeToFile(fileName, answers) {
  let svgLogo = "";

  let choices;
  let shapeString = "";

  if (answers.Shape === "Circle") {
    choices = new Circle();
    shapeString = `<circle cx="150" cy="100" r="80" fill="${answers.background}"/>`;
  } else if (answers.Shape === "Square") {
    choices = new Square();
    shapeString = `<rect x="90" y="40" width="120px" height="120px" viewBox="0 0 15 15" fill="${answers.background}"/>`;
  } else {
    choices = new Triangle();
    shapeString = `<polygon points="150, 18 244, 182 56, 182" fill="${answers.background}"/>`;
  }

  let textString = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.color}">${answers.display}</text>`;
  svgLogo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${shapeString}
${textString} 

</svg>`;

  fs.writeFile(fileName, svgLogo, (err) => {
    err ? console.log(err) : console.log("SVG Logo has been completed");
  });
}

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
        message: "Choose your color for the text (Enter color keyword)",
        name: "color",
      },

      {
        type: "list",
        message: "Choose your shape",
        choices: ["Circle", "Square", "Triangle"],
        name: "Shape",
      },

      {
        type: "input",
        message: "Choose your color for the background (Enter color keyword)",
        name: "background",
      },
    ])

    .then((answers) => {
      if (answers.display.length > 3) {
        console.log("Please enter only 3 letters");
        inIt();
      } else {
        writeToFile("Logo.svg", answers);
      }
    });
}

inIt();
