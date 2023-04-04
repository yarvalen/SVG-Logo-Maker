class Shape {
    constructor() {
        this.color = ''
        this.textColor = ''
        this.text = ''
    }
    setColor(color) {
        this.color = color
    }
    setTextColor (textColor){
        this.textColor = textColor
    }
    setText (text){
        if (text.length > 3) {
            throw new Error("Text can be no more than 3 characters");
        } else{
        this.text = text
    }}

}

class Square extends Shape {
    
    render() {
        return `
        <rect x="50" y="20" width="150" height="150"
        fill="${this.color}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}


class Triangle extends Shape {
   
    render() {
        return `
        <polygon points="0 200, 150 0, 300 200" fill="${this.color}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

class Circle extends Shape {
  
    render() {
        return `
        <circle cx="150" cy="100" r="100" fill="${this.color}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = { Square, Triangle, Circle }