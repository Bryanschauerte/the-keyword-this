//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
var answer1 ="'This' keyword is used as a shortcut to a reference of the the object's subject in context"
  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
var answer2 = "The four rules that govern 'this' are; Implicit, explicit, new and default.
call a method on a function left of the dot - Implicit
explicit - three methods of functions where you use call() apply and bind
new - when js uses a brand new object and passes a param into it;"
  // 3) What is the difference between call and apply?

      //Answer

  // 4) What does .bind do?

      //Answer


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    function User(username, email) {
      this.username = username;
      this.email = email;
      this.getUsername = function () {
        return this.username;
      };

    }

    var user = new User("BryanKnows", "bryan.email.com");



//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername(); // "BryanKnows"

//Next Problem


// Write the function definitions which will make the following function invocations function properly.


/*    constructor is not what they wanted but works better.
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function(){
     return this.move += 10;};
}
*/

  //Function Invocations Here

  function Car(brand, model, year) {
    return {
      brand: brand,
      model: model,
      year: year,
      move: 0,
      moveCar: function() {
      return this.move += 10;}
    };

  }

var prius = Car('Toyota', 'Prius', 2011);
var mustang = Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments prius' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object
//that is being returned from the Car function. You'll also need to use the
//'this' keyword properly in order to make sure you're invoking moveCar on the
// write object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects
// from above, use the proper syntax that will allow for you to call the getYear
// function with the prius then the mustang objects being the focal objects.
// *Don't add getYear as a property on both objects*.

  //Code Here
var priusYear = getYear.bind(prius);
var mustangYear = getYear.bind(mustang);

priusYear();
mustangYear();


//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After
// 5 seconds, what will the getUsername function return?

//Answer Here
var answer3 = "It will log the usernam of the window because it is not bound to a variable, rather it moves up to window.name"



//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
  var answer4 = "it is calling the 'this keyword' type of 'default'"

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.

var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};
//the answer is below
setTimeout(getUsername.call(user), 5000);
