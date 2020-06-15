//1. Create a Class called WhyClass.  This class should have one property, and two methods.  THe property is called "purpose", and stores a string.  This string should clearly explain why classes are used in Object Oriented Programming.  The first method is called explain().  This method should print the contents stored in the purpose 'field' of the class.  The second method is called pieces().  This 2nd method should print out the various parts that are essential to building a class.  Instantiate the class, and invoke the method so the results are showing in the console once this file is run.



class WhyClass {
   constructor(purpose){
      this.purpose = purpose; 
   }

   explain = () => {
      return this.purpose; 
   }
   // pieces function lives in prototype, still available 
   pieces = () => {
      return "First we need class keyword, and we have to give a name of the class. Best practice is to capitalize the first letter of the name. Then we run constructor method which constructs properties of objects. Inside a cunstructor we define all properties and variables that constructor function is taking as parameters. Every time when we create an instance of the class we have to pass all arguments to instantiate the properties of newly created object instance"
   }
}


const myObj = new WhyClass("Classes are used in OOP as a blueprint which objects are created from")
console.log(myObj.explain()) // Classes are used in OOP as a blueprint which objects are created from
console.log(myObj.pieces())


/*2. You are exploring the rainforests of the Amazon.  You have observed many different types of wildlife on your excursion.  To jog your memory, some different types of wildlife that you observed are found in the following URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.  Each creature should have 3 unique characteristics, and 2 unique actions that it can do. */


class AmazonSpecies {
   constructor(name, color, weight, height, canSwim){
      this.name = name; 
      this.color = color; 
      this.weight = weight; 
      this.height = height; 
      this.canSwim = canSwim; 
   }

   hunts = (days) => {
      return `${this.name} hunts ${days} times a day!`
   }

   runs = speed => {
      return  `${this.name} runs at the speed of ${speed} miles per hour!`
   }
}

// 1 
const anaconda = new AmazonSpecies("Anaconda", "Black", 550, 4, true); 
console.log(anaconda)
console.log(anaconda.hunts(1)) // Anaconda hunts 1 times a day!
console.log(anaconda.runs(56)) // Snake runs at the speed of 56 mile per hour 

// 2
const capybara = new AmazonSpecies("Capybara", "brown", 125, 25, true)
console.log(capybara.hunts(4)) // Capybara hunts 4 times a day! 

// Other four species 
const greenIguana = new AmazonSpecies("Green Iguana", "green", 65, 17, false) 
const harpyEagle = new AmazonSpecies("Harpy Eagle", "grey", 6, 40, false)
const chameleons = new AmazonSpecies("Chameleons", "green", 0.2, 1, false)
const antbird = new AmazonSpecies("Antbird", "red-black", 0.5, 8, false)


/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate the object literals
*/


class Shape {
   constructor(name, sides, base, height){
      this.name = name; 
      this.sides = sides; 
      this.base = base; 
      this.height = height; 
   }

   calcArea () {
      console.log(`${this.name}'s area is calculated to be : ${.5 * this.base * this.height}`)
   }
   calcPerimeter () {
      console.log(`${this.name}'s perimeter is calculated to be : ${(this.base) + (this.sides[1] + this.sides[2]) }`) 
   }
}


const triangle = {
    name : "triangle",
    sides : [4,7,7], //lengths of each side
    base : null,
    height : null, //determine this height using basic geometry.  You may need to research this one.
    calcArea : function() {
        console.log(`${this.name}'s area is calculated to be : ${.5 * this.base * this.height}`);
    },
    calcPerimeter : function() {
        console.log(`${this.name}'s perimeter is calculated to be : ${(this.base) + (this.sides[1] + this.sides[2]) }`)
    }
}

triangle.base = triangle.sides[0];  //base is the 1st side in the triangle.sides array.
triangle.height = 6.71; //determine the height using basic geometry.  How do you calculate the height of a triangle with 2 equal sides?  If you use the formula to caluclate the height, this is a bonus.  If you hard code the correct value here, that will be sufficient, but no bonus :(

console.log(triangle);
triangle.calcArea();
triangle.calcPerimeter();



// MY ANSWER 
const triangle = new Shape("Triangle", [4,7,7], null, null); 
triangle.base = triangle.sides[0];
triangle.height = 6.71; 
nsole.log(triangle); // Shape { name: 'Triangle', sides: [ 4, 7, 7 ], base: 4, height: 6.71 }
triangle.calcArea(); // Triangle's area is calculated to be : 13.42
triangle.calcPerimeter(); // Triangle's perimeter is calculated to be : 18



const rectangle = {
    name : "rectangle",
    sides : 4,
    length : 2,
    width : 5,
    calcArea : function() {
        console.log(`${this.name}'s area is calculated to be : ${this.length * this.width}`);
    },
    calcPerimeter : function() {
        console.log(`${this.name}'s perimeter is calculated to be : ${(2 * this.length) + (2 * this.width) }`)
    },
}

console.log(rectangle);
rectangle.calcArea();
rectangle.calcPerimeter();


// My answer for Rectangle: 
const rectangle = new Shape("Rectangle", [4,6,6,4], 2, 5);
rectangle.length = rectangle.sides[0] 
rectangle.width = rectangle.sides[1]
rectangle.calcArea = function () {
   console.log(`${this.name}'s area is calculated to be : ${this.length * this.width}`);
}
rectangle.calcPerimeter = function () {
	console.log(`${this.name}'s perimeter is calculated to be : ${(2 * this.length) + (2 * this.width) }`)
}
rectangle.calcArea() // Rectangle's area is calculated to be : 5
rectangle.calcPerimeter() // Rectangle's perimeter is calculated to be : 20



const circle = {
    name : "circle",
    sides : 1,
    radius : 5,
    calcArea : function() {
        console.log(`${this.name}'s area is calculated to be : ${(Math.PI * this.radius**2).toFixed(2)}`);
    },
    calcCircumference : function() {
        console.log(`${this.name}'s circumference is calculated to be : ${(2 * Math.PI * this.radius).toFixed(2)}`)
    }
}

console.log(circle);
console.log(circle.calcCircumference());
console.log(circle.calcArea());

// My answer for circle 
const circle = new Shape("Circle", 1, null, null); 
circle.radius = 5; 
circle.calcArea = function () {
	console.log(`${this.name}'s area is calculated to be : ${(Math.PI * this.radius**2).toFixed(2)}`);
}
circle.calcCircumference = function () {
	console.log(`${this.name}'s circumference is calculated to be : ${(2 * Math.PI * this.radius).toFixed(2)}`)
}

console.log(circle);
console.log(circle.calcCircumference()); // Circle's circumference is calculated to be : 31.42
console.log(circle.calcArea()) // Circle's area is calculated to be : 78.54

/*********************************************** 
Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  Also, as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it, you will also obtain the bonus for this exercise.  The dimensions for the triangle are already provided for you in the triangle object literal. */


// Pentagon
const pentagon = new Shape("Pentagon", 7, 7, null) 
pentagon.parameter = pentagon.sides * 5; 
pentagon.height = Math.sqrt(pentagon.base**2 - (pentagon.base/2)**2); 

pentagon.calcArea = function () {
	console.log(`${this.name}'s area is calculated to be : ${pentagon.parameter*pentagon.height/2}`);
}
console.log(pentagon.calcArea()) // 106.08
console.log(pentagon.parameter); // 35 

// Hexagon
const hexagon = new Shape ("Hexigon", 10, 10, null )
hexagon.parameter = hexagon.sides*6; 
hexagon.calcArea = function () {
	console.log(`${this.name}'s area is calculated to be : ${3*Math.sqrt(3)*Math.pow(this.sides, 2)/2}`)
}
hexagon.calcArea() // Hexigon's area is calculated to be : 259.80
hexagon.parameter; // 60 



// Octagon 
const octagon = new Shape ("Octagon", 5, 5, null )
octagon.parameter = octagon.sides*8; 
octagon.calcArea = function () {
	console.log(`${this.name}'s area is calculated to be : ${2*(1+Math.sqrt(2))*Math.pow(this.sides, 2)}`)
}
octagon.calcArea() // Octagon's area is calculated to be : 120.71
octagon.parameter; // 40 



/*
//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 known earth, we don't want multiple instances of earth.  Modify the class so the properties are usuable WITHOUT instantiating the class.

*/


class Earth {
   static name = "Earth";
   static planetNum = 3; 
     static area = 196.9 

   constructor(name,num) {
       this.name = name;
       this.planetNum = num;
   }
   static calcArea () {
      return console.log(`Area of ${this.name} is ${this.area} mln mile square`)
   }
}	

const earth = new Earth('earth',3);
console.log(earth);




