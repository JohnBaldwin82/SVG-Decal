// adding Shape class to this.color to fill in which color is wanted into an empty string
class Shape {
  constructor() {
    this.color = "";
  }
  pickColor(colorParam) {
    this.color = colorParam;
  }
}

// sets classes for Circle, Square and Triangle to return a selected shape and specific color.
class Circle extends Shape {
  myFunction() {
    return `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`;
  }
}

class Square extends Shape {
  myFunction() {
    return `<rect x="90" y="40" width="120px" height="120px" viewBox="0 0 15 15" fill="${this.color}"/>`;
  }
}

class Triangle extends Shape {
  myFunction() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
  }
}

module.exports = { Circle, Square, Triangle };

