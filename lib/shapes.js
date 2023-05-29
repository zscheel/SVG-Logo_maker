
class Triangle {
    constructor(color) {
        this.color = color
    }
    setColor(color) {
        this.color = color
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
};

class Square {
    constructor(color) {
        this.color = color
    }
    setColor(color) {
        this.color = color
    }
    render() {
        return `<rect x="50" y="10" width="200" height="200" fill="${this.color}" />`
    }
};

class Circle {
    constructor(color) {
        this.color = color
    }
    setColor(color) {
        this.color = color
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />` 
    }
};

class Shape {
    constructor(shape, shapeColor, textColor, text) {
        this.shape = shape
        this.shapeColor = shapeColor
        this.textColor = textColor,
        this.text = text
    }
    mainRender() {
        let shapeRender;
        if (this.shape === 'triangle') {
            shapeRender = new Triangle;
            shapeRender.setColor(this.shapeColor);
        } else if (this.shape === 'square') {
            shapeRender = new Square;
            shapeRender.setColor(this.shapeColor);
        } else {
            shapeRender = new Circle;
            shapeRender.setColor(this.shapeColor);
        }

        return `
            <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">

            ${shapeRender.render()}

            <text x="150" y="120" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
            </svg>    
        `
    }
}

module.exports = { Shape, Square, Triangle, Circle };