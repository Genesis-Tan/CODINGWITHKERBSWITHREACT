class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);
console.log(square.area);
console.log(square.calcArea());

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name}: *noise*`);
  }
}

const human = new Animal("Nina");
human.speak(); // Nina: *noise*

class Dog extends Animal {
  // calls the super class constructor
  // and passes in the name parameter
  constructor(name) {
    super(name);
  }
  speak() {
    console.log(`${this.name}: woof`);
  }
}
const dog = new Dog("Alexander");
dog.speak(); // Alexander: woof
