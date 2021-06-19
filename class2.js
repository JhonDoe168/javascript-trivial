class Circle{
    constructor(radius){
        this.radius = radius;
    }
    getArea(){
        return this.radius * this.radius * Math.PI;
    }
}

let c1 = new Circle(5);
let c2 = new Circle(10);

console.log(c1.radius);
console.log(c1.getArea());
console.log(c2.radius);
console.log(c2.getArea());

