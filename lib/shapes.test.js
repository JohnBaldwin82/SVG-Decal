const {Circle, Square, Triangle} = require('./shapes.js')


describe('Circle test', () => {
    test('testing for a green background for Circle', () => {
        const Shape = new Circle()
        Shape.myFunction('green')
        expect(Shape.myFunction()).toEqual(
            '<circle cx="25" cy="75" r="20" fill="green"/>'
        )
    })
})

describe('Square test', () => {
    test('testing for a green background for Square', () => {
        const Shape = new Square()
        Shape.myFunction('green')
        expect(Shape.myFunction()).toEqual(
            '<rect x="90" y="40" width="120px" height="120px" viewBox="0 0 15 15" fill="green"/>'
        )
    })
})

describe('Triangle test', () => {
    test('testing for a green background for Triangle', () => {
        const Shape = new Triangle()
        Shape.myFunction('green')
        expect(Shape.myFunction()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="green"/>'
        )
    })
})