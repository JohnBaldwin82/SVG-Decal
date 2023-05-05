const {Circle, Square, Triangle} = require('./shapes.js')


describe('Circle test', () => {
    test('testing for a green background for Circle', () => {
        const Shape = new Circle()
        Shape.pickColor('green')
        expect(Shape.myFunction()).toBe(
            '<circle cx="25" cy="75" r="20" fill="green"/>'
        )
    })
})

describe('Square test', () => {
    test('testing for a yelloW background for Square', () => {
        const Shape = new Square()
        Shape.pickColor('yellow')
        expect(Shape.myFunction()).toBe(
            '<rect x="90" y="40" width="120px" height="120px" viewBox="0 0 15 15" fill="yellow"/>'
        )
    })
})

describe('Triangle test', () => {
    test('testing for a red background for Triangle', () => {
        const Shape = new Triangle()
        Shape.pickColor('red')
        expect(Shape.myFunction()).toBe(
            '<polygon points="150, 18 244, 182 56, 182" fill="red"/>'
        )
    })
})