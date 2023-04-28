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
        return `<circle cx="25" cy="75" r="20" stroke="red" fill='${this.color}' stroke-width="5"/>`
    }
}
let myCircle = new Circle()
myCircle.pickColor('green')
console.log(myCircle)