const {Circle, Square, Triangle} = require('./shapes.js')

// const shape = new Triangle();
// shape.render("green");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green"/>');

describe('Circle test', () => {
    test('testing for a green background for Circle', () => {
        const Shape = new Circle()
        Shape.myFunction('green')
        expect(Shape.myFunction()).toEqual(
            '<circle cx="25" cy="75" r="20" fill="green"/>'
        )
    })
})

describe('Circle test', () => {
    test('testing for a green background for Circle', () => {
        const Shape = new Square()
        Shape.render('green')
        expect(Shape.render()).toEqual(
            '<rect x="90" y="40" width="120px" height="120px" viewBox="0 0 15 15" fill="green"/>'
        )
    })
})

describe('Triangle test', () => {
    test('testing for a green background for Triangle', () => {
        const Shape = new Triangle()
        Shape.render('green')
        expect(Shape.render()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="green"/>'
        )
    })
})