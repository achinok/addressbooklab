class Contact{
    constructor(name, email, phone, relation){
      this.name= name;
      this.email = email;
      this.phone = phone;
      this.relation = relation;
    }
  }
  
  class AddressBook {        
    constructor(){
      this.contacts = [];
      let jimmy = new Contact("jimmy", "jimmy@yahhoooo", "555-555", "sketchy friend" );
      this.contacts[0] = jimmy;
      let billy = new Contact("billy", "billy@gvsu.edu", "810-253-4569", "childhood friend");
      this.contacts[1] = billy;
    }
    
    Add(){
      let name = prompt("Please input your contacts name");
      let email = prompt("Please input your contacts email");
      let phone = prompt("Please inputs your contacts number");
      let relation = prompt("Please input your relation with this person");
    
      
      let newFriend = new Contact(name, email, phone, relation);
      this.contacts.push(newFriend);
    }
    
  }
  
   let book = new AddressBook();     // no parameters needed in the constructor
  // console.log(book.contacts);
  // book.Add();
  // console.log(book.contacts);
  
  while(true) {
    let input = prompt("Do you wish to (add) or (quit) or (delete) or (print)?");
    
    if(input === "add" ){
      book.Add();
      console.log("contact added");
    }
    else if(input === "quit"){
      console.log("Goodbye");
      break;
    }
    else if(input === "delete"){
      let name = prompt("Please input the index of the contact you wish to delete");
      book.contacts.splice(this.contact);
      console.log("deleted");
    }
    else if(input === "print"){
      console.log();
      console.log(book.contacts);
    break; }
       else{
      console.log("Sorry, I didn't understand that");
      console.log("Let's try that again");
    }
  }
  
  // book.Add();  // method to call adding a new contact
  
  // book.contacts.splice(0, 1); splice needs two numbers where to start and stop
  
  // console.log(); print entire thing
  
  
  
  // be sure your methods are in the proper places!! :D
  
    
  // splice next to deleted
  
  // console.log
  
  
  
  
  
  
  
  
  