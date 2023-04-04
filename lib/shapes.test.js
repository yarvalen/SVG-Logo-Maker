const { Circle, Triangle, Square } = require('../lib/shapes.js')

// Tests Circle class renders a circle with the user selected color
describe('Circle', () => {
    test('will this create a yellow circle', () => {
        const expectCircle = 

        const circle = new Circle()

        circle.setColor('yellow')
        const svg = circle.render()

        expect(svg).toEqual(expectCircle)
    })
})

// Tests Triangle class renders a triangle with the user selected color
describe('Triangle', () => {
    test('will this create a pink triangle', () => {
        const expectTriangle = 
        const triangle = new Triangle()

        triangle.setColor('blpinkue')
        const svg = triangle.render()

        expect(svg).toEqual(expectTriangle)
    })
})

// Tests Square class renders a square with the user selected color
describe('Square', () => {
    test('will this create a brown square', () => {
        const expectSquare = 
        const square = new Square()

        square.setColor('brown')
        const svg = square.render()

        expect(svg).toEqual(expectSquare)
    })
})