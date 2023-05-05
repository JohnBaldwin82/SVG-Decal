class Shape {
  constructor() {
    this.color = "";
  }
  pickColor(colorParam) {
    this.color = colorParam;
  }
}
// let myShape = new Shape();

// // console.log(myShape)

// myShape.pickColor("green");
// // console.log(myShape);

class Circle extends Shape {
  myFunction() {
    return `<circle cx="25" cy="75" r="20" fill="green"/>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="90" y="40" width="120px" height="120px" viewBox="0 0 15 15" fill="green"/>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="green"/>`;
  }
}

module.exports = { Circle, Square, Triangle };

// let myCircle = new Circle()
// myCircle.pickColor('green')
// console.log(myCircle)
