class Snape {
    constructor(color, initX, initY) {
        this.color = color;
        this.initX = initX;
        this.initY = initY;
    }
    getColor(){
        return this.color;
    };
    setColor(val){
        this.color = val;
        return this.color;
    };
    getCoords(){
        return this.initX, this.initY;
    };
    moveTo(newX, newY){
        this.initX = newX;
        this.initY = newY;
        return this.initX, this.initY;
    }
}
let snape = new Snape("red", 10, 10);


class Regtangle extends Snape{
    constructor(color, initX, initY, initWidth, initHeight){
        super(color, initX, initY);
        this.initWidth = initWidth;
        this.initHeight = initHeight;
}

    setWidth(newWidth){
        this.initWidth = newWidth;
        console.log(this.initWidth);
    };
    setHeight(newHeight){
        this.initHeight = newHeight;
        console.log(this.initHeight);
    };
    getDims(){
        console.log(this.initWidth, this.initHeight);
    };
    draw(){
        console.log(`Drawing a Regtangle at
  (X: ${this.initX}, Y: ${this.initY})
 With dimentions:
   width: ${this.initWidth}
   height: ${this.initHeight}   
 Filled with color: ${this.color}`)

    };
}

let regtangle = new Regtangle("#009688", 10, 10, 100, 100);
regtangle.draw();

class Circle extends Snape{
    constructor(color, initX, initY,initRadius){
        super(color, initX, initY);
        this.initRadius = initRadius;
    }
    getRadius(){
        return this.initRadius;
    }
    setRadius(val){
        this.initRadius = val;
        return this.initRadius;
    }
    draw(){
        console.log(`Drawing a Circle at
  (X: ${this.initX}, Y: ${this.initY})
 With dimentions:
    redius: ${this.initRadius}   
 Filled with color: ${this.color}`)
    }

}
let circle = new Circle("#ff5722", 50, 50, 250);
circle.draw();