class Shape {
    constructor() {
      
        this.color = ''
       
    }
    pickColor(colorParam) {
        this.color = colorParam
    }
}

let myShape = new Shape()
// console.log(myShape)

myShape.pickColor('green')
console.log(myShape)

class Circle extends Shape {
    myFunction() {
        return `<circle cx="25" cy="75" r="20" stroke="red" fill='${this.color}'/>`
    }
}

class Square extends Shape {
    myFunction() {
        return `<square width="800px" height="800px" viewBox="0 0 15 15" fill='${this.color}'/>`
    }
}

class Triangle extends Shape {
    myFunction() {
        return `<polygon points width="800px" height="800px" viewBox="0 0 15 15" fill='${this.color}'/>`
    }
}

let myCircle = new Circle()
myCircle.pickColor('green')
console.log(myCircle)