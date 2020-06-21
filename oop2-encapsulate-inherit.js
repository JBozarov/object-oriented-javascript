/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    - Review class.  It should have a rating and user property.
    -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves. */

    
    class Book {
      #author = "Old auther"; 
      #publisher = "Old Publisher"; 

      constructor(author, publisher){
         this.#author = author; 
			this.#publisher = publisher; 
      }

			// Getters
      getAuthor () {
         return this.#author; 
      }
      getPublisher () {
         return this.#publisher; 
      }

			// Setters 
      setAuthor (newAut) {
         this.#author = newAut; ; 
      }
      setPublisher (newPub) {
         this.#publisher = newPub; ; 
      }

   }

   const b = new Book("New Auther", "New Publisher")

    console.log(b.getAuthor())
	 console.log(b.getPublisher())


    class Author {
       #name; 
       #books; 
       constructor(name, books) {
          this.#name = name; 
          this.#books = books; 
       }

       // Getters 
       getName () {
          return this.#name; 
       }
       getBooks () {
          return this.#books; 
       }


       // Setters 
       setName (n) {
          this.#name = n; 
       }
       setBooks (b) {
          this.#books = b
       }
    }



    class Publisher {
       #authors;
       #books;
       constructor(authors, books) {
          this.#authors = authors; 
          this.#books = books; 
       }

       // Getters 
       getAuthors () {
         return this.#authors; 
      }
      getBooks () {
         return this.#books; 
      }


      // Setters 
      setAuthors (a) {
         this.#authors = a; 
      }
      setBooks (b) {
         this.#books = b
      }
    }

    class Review {
       #rating
       #user
       constructor(rating, user){
          this.#rating = rating; 
          this.#user = user; 
       }

       // Getters 
       getRating () {
         return this.#rating; 
      }
       getUser () {
         return this.#user; 
      }


      // Setters 
       setRating (r) {
         this.#rating = r; 
      }
       setUser (u) {
         this.#user = u
      }
    }





/*
2. Create the following classes:
    - Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
    - Company class. It should have a compnay name and # of employees.  Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
    - Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  Create 3 sites for each company.
    - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.
    
    - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing. */



    class Unbrella {
      static organizationName = "Allegis Group Company"; //
      constructor(organizationName, type, branches){
         this.organizationName = organizationName;
         this.type = type; 
         this.branches = branches; 
      }
      getType () {
         return this.type; 
      }
      getBranchesList () {
         return this.branches; 
      }
   }


   class Company extends Unbrella{
      constructor(companyName, numberOfEmployees, organizationName) {
         super(organizationName)
         this.companyName = companyName; 
         this.numberOfEmployees = numberOfEmployees; 
      }
      getCompName () {
         return this.companyName; 
      }
      getNumberOfEmployees(){
         return this.numberOfEmployees; 
      }
   }

     const company1 = new Company("Google", 20000, Unbrella.organizationName)
     const company2 = new Company("Amazon", 30000, Unbrella.organizationName)
     const company3 = new Company("Facebook", 40000, Unbrella.organizationName)
     console.log(company1)


     class Site extends Company {
       constructor(companyName, location){
         super(companyName); 
          this.location = location; 
       }
       getLocation(){
          return this.location; 
       }
       // In case if location changes 
       setLocation ( newLocation ) {
          this.location = newLocation; 
       }
     }

     const site3 = new Site(company1.companyName, "California"); 
     const site2 = new Site(company2.companyName, "Florida"); 
     const site3 = new Site(company3.companyName, "Canada"); 
     console.log(site3)


     class Employee extends Site {
        constructor(empName, title, salary, companyName, location, status) {
           super(companyName, location); 
           this.empName = empName; 
           this.title = title; 
           this.salary = salary; 
           this.status = status 
        }
        getEmployeeStatus(){
           return this.status
        }
        setStatus(newStatus){
           this.status = status; 
        }
     }

     const employee1 = new Employee("George", "CEO", 150000, company1.companyName, site1.location, "married"); 
     const employee2 = new Employee("Vimala", "Manager", 150000, company1.companyName, site1.location, 'single'); 
     const employee3 = new Employee("Victor", "CEO", 150000, company1.companyName, site1.location, "devorced"); 
     const employee4 = new Employee("John", "CEO", 150000, company2.companyName, site2.location, "married"); 
     const employee5 = new Employee("Talib", "CEO", 150000, company2.companyName, site2.location, "married"); 
     const employee6 = new Employee("Mike", "CEO", 150000, company2.companyName, site2.location, "married"); 
     const employee7 = new Employee("Kevin", "CEO", 150000, company3.companyName, site3.location, "single"); 
     const employee8 = new Employee("Rosa", "CEO", 150000, company3.companyName, site3.location, 'devorced'); 
     const employee9 = new Employee("Gotham", "CEO", 150000, company3.companyName, site3.location, 'single'); 
     const employee10 = new Employee("Vani", "CEO", 150000, company3.companyName, site3.location, 'married'); 


/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/



// Creating Review class and some instances 
// I recreated all classes to make variable non private and so I can see data flow when I console log it. 
class Review {
	rating=0; 
	message=''; 
	constructor(rating, message){
		this.rating += rating; 
		this.message = this.message + " " + message
	}
}

// Review instances
const review5 = new Review(5, "Best Book, I will definitely read it and recommend it to others!");
const review4 = new Review(4, "Nice Book, I will read it one more time"); 
const review3 = new Review(3, "It is okey, I don't mind reading it"); 
const review2 = new Review(2, "I did not love it, I won't read it again"); 
const review1 = new Review(1, "I hated this book. It was waste of my time"); 

console.log(review5) // { rating: 5, message: ' Best Book, I will definitately read it and reccomend it to others!' }


// Creating Author class and some authors/instances
class Author {
	constructor(name, numberOfBooks){
		this.name = name; 
		this.numberOfBooks = numberOfBooks; 
	}
	getAuthor () {
		return {
			name: this.name, 
			numberOfBooks: this.numberOfBooks
		}
	}
	getAuthorName () {
		return {
			name: this.name
		}
	}
}

// Authors
const stephen = new Author("Stephen King", 100);
const coetzee = new Author(" J. M. Coetzee", 75);
const david = new Author("David Foster Wallace", 37);

console.log(david); //  { name: 'David Foster Wallace', numberOfBooks: 37 }




// Creating Publisher class and some publisher instances 
class Publisher {
	constructor(name, authors){
		this.name = name; 
		this.authors = authors; 
	}
	getPublisher () {
		return {
			name: this.name, 
			authors: this.authors
		}
	}
}

// New publisher instances
const penguin = new Publisher("Penguin Random House", stephen.getAuthor()); 
const martins = new Publisher("ST MARTINS PRESS", coetzee.getAuthor()); 
const backbay = new Publisher("Back Bay Books", stephen.getAuthor()); 

console.log(penguin) // { name: 'Penguin Random House', authors: { name: 'Stephen King', numberOfBooks: 100 } }



// Single Book class 
class Book {
   constructor(bookName, bookAuthor, bookPublisher, bookReviews) {
		 this.bookName = bookName; 
		 this.bookAuthor = bookAuthor; 
		 this.bookPublisher = bookPublisher; 
		 this.bookReviews = bookReviews; 
   }
}

// New Book instances 
const desert_Solitaire = new Book("Desert Solitaire", stephen.getAuthorName(), penguin.getPublisher(), review2); 
const disgrace = new Book("Disgrace", coetzee.getAuthorName(), penguin.getPublisher(), review5); 
const infinite = new Book("Infinite Jest", david.getAuthorName(), backbay.getPublisher(), review4); 

console.log(desert_Solitaire) /* :
{
  bookName: 'Desert Solitaire',
  bookAuthor: { name: 'Stephen King' },
  bookPublisher: {
    name: 'Penguin Random House',
    authors: { name: 'Stephen King', numberOfBooks: 100 }
  },
  bookReviews: Review {
    rating: 2,
    message: " I did not love it, I won't read it again"
  }
} */




// Creating Bookstore class
class Bookstore {
	name = ''; 
	books=[]; 
	constructor(name) {
		this.name = name; 
	}
	addNewBook(newBook) {
		this.books.push(newBook); 
	}
}


// Creating bookstore instances
const amazonian = new Bookstore("Amazonian Book Store");

//adding all books to new amazonian: 
amazonian.addNewBook(desert_Solitaire);  
amazonian.addNewBook(disgrace);  
amazonian.addNewBook(infinite);  

console.log(amazonian) 
/* 
{
  name: 'Amazonian Book Store',
  books: [
    Book {
      bookName: 'Desert Solitaire',
      bookAuthor:  { name: 'Stephen King' },
      bookPublisher: {
                     name: 'Penguin Random House',
                     authors: { name: 'Stephen King', numberOfBooks: 100 }
                  },
      bookReviews: {
                     rating: 2,
                     message: " I did not love it, I won't read it again"
                  }
    },
    Book {
      bookName: 'Disgrace',
      bookAuthor: { name: 'David Foster Wallace },
      bookPublisher: {
                        name: 'Penguin Random House',
                        authors: { name: 'Stephen King', numberOfBooks: 100 }
                     },
      bookReviews: {
                     rating: 5,
                     message: ' Best Book, I will definitately read it and reccomend it to other
                     },
    Book {
      bookName: 'Infinite Jest',
      bookAuthor: { name: 'David Foster Wallace' },
      bookPublisher: {
                        name: 'Back Bay Books',
                        authors: { name: 'Stephen King', numberOfBooks: 100 }
                     },
      bookReviews: {
                     rating: 4,
                     message: ' Nice Book, I will read it one more time'
                  }
    }
  ]
}

*/

