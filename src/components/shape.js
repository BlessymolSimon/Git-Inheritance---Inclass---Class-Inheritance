// declare class

// export class using module.exports

/*Acceptance Criteria

Create a base class called "Shape" with methods drawShape, calculateArea and color property that is initialised with a color.
In another module make a class called "Circle" that extends the "Shape" class and overrides the calculateArea method.
Write code for Shape class in shape.js and Circle in circle.js
Export the class from each file.
Note: Don't remove any file from the cloned repo, otherwise all test cases will fail. Use module.exports for export and require for import. If it is not covered in class, google it :)*/

class Shape {
    constructor() {
        this.color="red";
    }
    drawShape(){
        console.log("drawing a shape");
    }
    calculateArea() {
        console.log("calculating area of a shape");
    }
}

module.exports=Shape;