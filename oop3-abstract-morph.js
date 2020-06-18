
/*
1. Create a Abstract Creature class that is NOT allowed to be instantiated. Find a way to prevent this class from being instantiated with an instance.  In the Creature class, include two abstract methods.  move(), and act().  These methods are NOT allowed to be invoked from the Abstract class, so throw an error in these methods if they are invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(), which are found on the abstract Creature class. In addition to the 2 abstract methods, implement 1 unique method on each sub-class.  Also, each sub-class MUST have at least 2 unique property fields on them.  Example property fields are:
    -name
    -weight
    -food
    -age

*/

class Creature {
   constructor(){
      if (this.constructor === Creature ) {
         throw new Error ("Creature cannot be instantiated")
      }
   }
   move() {
      throw new Error ("Move method cannot be invoked")
   }
   act() {
      throw new Error ("Act method cannot be invoked")
   }
}

// console.log(Creature.move()) // Error 
// const c = new Creature("name of cr") // Error
// console.log(c) // Error

  class Human extends Creature {
     constructor(name, walkSpeed, age){
        super()
        this.name = name; 
        this.walkSpeed = walkSpeed
        this.age = age
     }
     move = () => {
        console.log(`${this.name} is moving at the speed of ${this.walkSpeed} mile per hour`)
     }
     act = () => {
        console.log(`${this.name} can act like a human`)
     }
     study () {
        console.log(this.name + " is studying!")
     }
     getAge () {
        console.log(`${this.name}'s age is ${this.age}`)
     }
  }

  const human1 = new Human("Sam", 4, 37); 
  console.log(human1.getAge()) // Sam's age is 37


  class Dinosaur extends Creature {
     constructor(name, weight, runSpeed){
        super()
        this.name = name; 
        this.weight = weight; 
        this.runSpeed = runSpeed; 
     }
     move = () => {
        console.log(`${this.name} is moving at the speed of ${this.runSpeed} mile per hour`)
     }
     act = () => {
        console.log(`${this.name} acts very aggressive`)
     }
     kill () {
        console.log(this.name + " can kill other animals and eat them!")
     }
  }

const brachiosaurus = new Dinosaur("Brachiosaurus", 56, 10); 
console.log(brachiosaurus.move()) // Brachiosaurus is moving at the speed of 10 mile per hour






  class Reptile extends Creature {
     constructor(name, weight, runSpeed, huntTime){
        super()
        this.name = name; 
        this.weight = weight; 
        this.runSpeed = runSpeed; 
        this.huntTime = huntTime
     }
     move = () => {
        console.log(`${this.name} is moving at the speed of ${this.runSpeed} mile per hour`)
     }
     act = () => {
        console.log(`${this.name} acts very aggressive`)
     }
     hunt () {
        console.log(`${this.name} hunts ${this.huntTime} times a day!`)
     }
  }

  const crocodile = new Reptile("Crocodile", 2, 15, 2); 
  console.log(crocodile.hunt()) // Crocodile hunts 2 times a day!



/*
2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.  For the Teacher method, a set of methods have already been set up.  For the Student class, it will be up to you to determine how to set up the methods to fire in the Student sub-class.  :
*/

class Person {
    name;

    eat() {
        console.log(this.name + " is eating");
    }

    sleep () {
        console.log(this.name + " is sleeping");
    }

    code = function() {
        console.log(this.name + " is coding");
    }

    repeat () {
        console.log(this.name + " is repeating the above steps, yet another time");
    }

    explain() {
        console.log("I know the order of precedence so first is Child field, Parent field, Child prototype and Parent Prototype. So I pretty much followed to fire Teacher methods. If method is function expression then it has more precedence so I need to convert Child's methods to functions expression");
    }

}


class Teacher extends Person {

    //refactor the methods in this Teacher class, so all of these methods override the methods in the Person super class.  

    constructor(name) {
        super(name);
        this.name = name;
    }

    eat() {
        console.log(this.name + " loves to teach before eating");
    }

    sleep() {
        console.log(this.name + " sleeps after preparing the lesson plan");
    }

    code = () => {
        console.log(this.name + " codes first, then teaches it the next day.");
    }

    repeat() {
        console.log(this.name + " teaches, codes, eats, sleeps, and repeats");
    }
}



class Student extends Person {
   constructor(name) {
      super(name);
      this.name = name;
  }
   eat() {
      console.log(this.name + " studies, then eats");
  }

  sleep() {
      console.log(this.name + " studies coding so much, that they dream about it in their sleep");
  }

  code = () => {
      console.log(this.name + " was first overwhelmed by coding, but kept at it, and now has become a coding guru!");
  }

  repeat() {
      console.log(this.name + " keeps on studying, coding, eating, and sleeping, and puts it all on repeat.");
  }

}


const teacher = new Teacher("Dr. Teacher");

teacher.explain();

const student = new Student("Pupil Student");

student.explain();

teacher.eat(); // Dr. Teacher loves to teach before eating
teacher.sleep(); // Dr. Teacher sleeps after preparing the lesson plan
teacher.code(); // Dr. Teacher codes first, then teaches it the next day.
teacher.repeat(); // Dr. Teacher teaches, codes, eats, sleeps, and repeats

student.eat();
student.sleep();
student.code();
student.repeat();




//****************************************************************************************************************************************************************************************   
//Bonus Exercise:

//3. Consider the following class:

class Cook {

    prepare(food1,food2,food3) {
        console.log("The cook is cooking " + food1, food2, food3);
    }

    prepare = function(food1,food2,food3) {
        console.log(`The cook is cooking ${food1} ${food2} ${food3}`);
    }

    explain = () => {
        console.log("Right now there are 2 prepare functions and when we invoke cook.prepare it is firing the second one because second one is function expression so it is in the field not in the prototype. One way is we need to convert first function to function expression or the second way is we just need to pass food1, food2, food3 to second function which is function expression");
    }

}

const cook = new Cook();

cook.prepare("turkey","salami","pizza");

cook.explain();

