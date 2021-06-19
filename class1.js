let c1 = {
    radius: 5,
    getArea(){
        return Math.PI * this.radius * this.radius; 
    }
}

let c2 = {
    radius: 10,
    getArea(){
        return Math.PI * this.radius * this.radius; 
    }
}

// console.log(c1.radius); 
// console.log(c1.getArea());

console.log(c2.radius);
console.log(c2.getArea());