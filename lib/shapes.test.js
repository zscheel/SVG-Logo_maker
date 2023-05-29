const { Triangle, Square, Circle } = require('./shapes');
describe('shape testing suites', () => {
    
    describe('triangle test', () => {
        it('should return correct shape and color', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    });

    describe('circle test', () => {
        it('should return correct shape and color', () => {
            const shape = new Circle();
            shape.setColor("orange");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="orange" />');
        })
    });

    describe('square test', () => {
        it('should return correct shape and color', () => {
            const shape = new Square();
            shape.setColor("black");
            expect(shape.render()).toEqual('<rect x="50" y="10" width="200" height="200" fill="black" />');
        })
    });

});