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
      constructor(organizationName){
         this.organizationName = organizationName;
      }
   }


   class Company extends Unbrella{
      constructor(companyName, numberOfEmployees, organizationName) {
         super(organizationName)
         this.companyName = companyName; 
         this.numberOfEmployees = numberOfEmployees; 
      }
   }

     const company1 = new Company("Google", 20000, Unbrella.organizationName)
     const company2 = new Company("Amazon", 30000, Unbrella.organizationName)
     const company3 = new Company("Facebook", 40000, Unbrella.organizationName)
     console.log(company1)


     2lass Site extends Company {
      2 constructor(companyName, location){
      2   super(companyName); 
         3 this.location = location; 
         3
     }
3     const site3 = new Site(company1.companyName, "California"); 
     const site2 = new Site(company2.companyName, "Florida"); 
     const site3 = new Site(company3.companyName, "Canada"); 
     console.log(site3)


     class Employee extends Site {
        constructor(empName, title, salary, companyName, location) {
           super(companyName, location); 
           this.empName = empName; 
           this.title = title; 
           this.salary = salary; 
        }
     }

     const employee1 = new Employee("George", "CEO", 150000, company1.companyName, site1.location); 
     const employee2 = new Employee("Vimala", "Manager", 150000, company1.companyName, site1.location); 
     const employee3 = new Employee("Victor", "CEO", 150000, company1.companyName, site1.location); 
     const employee4 = new Employee("John", "CEO", 150000, company2.companyName, site2.location); 
     const employee5 = new Employee("Talib", "CEO", 150000, company2.companyName, site2.location); 
     const employee6 = new Employee("Mike", "CEO", 150000, company2.companyName, site2.location); 
     const employee7 = new Employee("Kevin", "CEO", 150000, company3.companyName, site3.location); 
     const employee8 = new Employee("Rosa", "CEO", 150000, company3.companyName, site3.location); 
     const employee9 = new Employee("Gotham", "CEO", 150000, company3.companyName, site3.location); 
     const employee10 = new Employee("Vani", "CEO", 150000, company3.companyName, site3.location); 


/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/



class Book {
   constructor(name, author, publisher, reviews) {
      this.name = name; 
      this.author = author; 
      this.publisher = publisher; 
      this.reviews = reviews
   }
}

class Bookstore {
   constructor() {
   }
}

class Publishers {
   constructor(name, authors, publishedBooks) {
      this.name = name; 
      this.authors = authors; 
      this.publishedBooks = publishedBooks
   }
}

class Authors {
   constructor(name, books) {
      this.name = name; 
      this.books = books; 
   }
} 