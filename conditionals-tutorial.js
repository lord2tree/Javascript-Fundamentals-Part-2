/*
-----JAVASCRIPT.INFO-----

  COMPARISONS:
    Boolean is the result. All comparison operators return a boolean value: true – means “yes”, “correct” or “the truth” and  false – means “no”, “wrong” or “not the truth”.
    -- EXAMPLE: alert( 2 > 1 ); //true (correct), alert( 2 == 1 ); //false (wrong), and alert( 2 != 1 ); //true (correct). A comparison result can be assigned to a variable, 
    just like any value: let result = 5 > 4; //assign the result of the comparison ---RESULTS:  alert( result ); // true. 

    String Comparisons: To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order. In other words, strings are 
    compared letter-by-letter. Not a real dictionary, but Unicode order.

    Comparison with null and undefined
        There’s a non-intuitive behavior when null or undefined are compared to other values.

        For a strict equality check ===
        These values are different, because each of them is a different type.

        alert( null === undefined ); // false
        For a non-strict check ==
        There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.

        alert( null == undefined ); // true
        For maths and other comparisons < > <= >=
        null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

    Strange result: null vs 0
        Let’s compare null with a zero:

        alert( null > 0 );  // (1) false
        alert( null == 0 ); // (2) false
        alert( null >= 0 ); // (3) true

        Mathematically, that’s strange. The last result states that "null is greater than or equal to zero", 
        so in one of the comparisons above it must be true, but they are both false.

        The reason is that an equality check == and comparisons > < >= <= work differently. 
        Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

        On the other hand, the equality check == for undefined and null is defined such that, without any conversions, 
        they equal each other and don’t equal anything else. That’s why (2) null == 0 is false. When you compare null 
        with any other value using the equality operator (==), it will only return false unless the other value is also null or undefined.


    An incomparable undefined
        The value undefined shouldn’t be compared to other values:

        alert( undefined > 0 ); // false (1)
        alert( undefined < 0 ); // false (2)
        alert( undefined == 0 ); // false (3)
        Why does it dislike zero so much? Always false!

        We get these results because:

        Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
        The equality check (3) returns false because undefined only equals null, undefined, and no other value.

!!  Avoid problems: Treat any comparison with undefined/null except the strict equality === with exceptional care. Don’t use comparisons >= > < <= with a variable  
!!  which may be null/undefined, unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.                     


-----W3 SCHOOLS -----

  CONDITIONAL STATEMENTS:
    Very often when you write code, you want to perform different actions for different decisions. You can use conditional statements in your code to do this. 
    In JavaScript we have the following conditional statements:

    A)  Use if to specify a block of code to be executed, if a specified condition is true
    B)  Use else to specify a block of code to be executed, if the same condition is false
    C)  Use else if to specify a new condition to test, if the first condition is false
    D)  Use switch to specify many alternative blocks of code to be executed

    Syntax
      if (condition1) {
        //  block of code to be executed if condition1 is true
      } else if (condition2) {
        //  block of code to be executed if the condition1 is false and condition2 is true
      } else {
        //  block of code to be executed if the condition1 is false and condition2 is false
      }


-----JAVASCRIPT.INFO-----
  
  LOGICAL OPERATORS:
      There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing). Here we cover the first three, the ?? operator is in the next article. Although 
      they are called “logical”, they can be applied to values of any type, not only boolean. Their result can also be of any type.
      

1)     || OR (finds the first truthy value)
          The “OR” operator is represented with two vertical line symbols: result = a || b; In classical programming, the logical OR is meant to manipulate boolean values only. 
          If any of its arguments are true, it returns true, otherwise it returns false. In JavaScript, the operator is a little bit trickier and more powerful.

          The OR || operator does the following:
          A)  Evaluates operands from left to right.
          B)  For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
          C)  If all operands have been evaluated (i.e. all were false), returns the last operand. In other words, a chain of OR || returns the first truthy value or the last 
              one if no truthy value is found.

              
        A value is returned in its original form, without the conversion. 
        Short-circuit evaluation. Another feature of OR || operator is the so-called “short-circuit” evaluation. It means that || processes its arguments until the first truthy value is 
        reached, and then the value is returned immediately, without even touching the other argument.

        true || alert("not printed");
        false || alert("printed");

        In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run. Sometimes, people use this feature to execute commands only if the 
        condition on the left part is falsy.

        myVariable = myVariable || "default value";

        The OR operator assigns a default value to a variable only if the variable is falsy (i.e., undefined or false). If the variable is already defined, the OR operator doesn't assign 
        the default value.


2)     && AND (finds the first falsy value)
        The AND operator is represented with two ampersands &&: result = a && b; In classical programming, AND returns true if both operands are truthy and false otherwise:
        alert( true && true );   // true, alert( false && true );  // false, alert( true && false );  // false, alert( false && false ); // false

        AND “&&” (finds the first falsy value)
          A)  Evaluates operands from left to right.
          B)  For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
          C)  If all operands have been evaluated (i.e. all were truthy), returns the last operand. In other words, AND returns the first falsy value 
              or the last value if none were found.

!!  The precedence of AND && operator is higher than OR ||. So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).

!!  Don’t replace if with || or &&. For instance: let x = 1; (x > 0) && alert( 'Greater than zero!' ) The action in the right part of && would execute only if the evaluation reaches 
!!  it. That is, only if (x > 0) is true. So we basically have an analogue for: let x = 1; if (x > 0) alert( 'Greater than zero!' ); Although, the variant with && appears shorter, 
!!  if is more obvious and tends to be a little bit more readable. So we recommend using every construct for its purpose: use if if we want if and use && if we want AND.


3)    ! (NOT)
        The boolean NOT operator is represented with an exclamation sign ! The syntax is pretty simple: result = !value; The operator accepts a single argument and does the following:
          A) Converts the operand to boolean type: true/false.
          B) Returns the inverse value.

        For instance:
          alert( !true ); // false
          alert( !0 ); // true

        A double NOT !! is sometimes used for converting a value to boolean type:
          alert( !!"non-empty string" ); // true
          alert( !!null ); // false

          That is, the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion.

          There’s a little more verbose way to do the same thing – a built-in Boolean function:

          alert( Boolean("non-empty string") ); // true
          alert( Boolean(null) ); // false
  */

let requiredName = "Admin";
let password = "TheMaster";

let name = prompt("Who's there?", "Enter your name.");

if (name == requiredName) {
  enteredPassword = prompt("Password?", "Enter password.");

  if (enteredPassword == password) {
    alert("Welcome");
  } else if (enteredPassword == "" || enteredPassword == null) {
    alert("Cancelled");
  } else {
    alert("Wrong password");
  }
} else if (name == "" || name == null) {
  alert("Cancelled");
} else {
  alert("I don't know you");
}

/*
-----MDN WEB DOCS-----

  SWITCH STATEMENTS
    If-else statements are good for making choices with complex conditions and requiring a significant amount of code to run. However, switch statements are better for simpler cases where 
    you want to set a variable or print a statement depending on a condition, and have many choices. Switch statements take a single input value and execute the code corresponding to the 
    matching choice. -- EXAMPLE:

      switch (expression) {
        case choice1:
          run this code
          break;

        case choice2:
          run this code instead
          break;

        // include as many cases as you like

        default:
          actually, just run this code
      }

    !!  The default keyword in a switch statement specifies the code to run if none of the cases match the input value. It follows the same code pattern as the cases but without a choice 
    !!  after it, and no need for a break statement.

  TERNARY OPERATOR
    The ternary or conditional operator tests a condition and returns one value if it is true and another if it is false. It's a useful alternative to if...else blocks when you only have 
    two choices to make. The pseudocode looks like this:  "condition ? run this code : run this code instead"   -- EXAMPLE:

    const greeting = isBirthday
    ? "Happy birthday Mrs. Smith — we hope you have a great day!"
    : "Good morning Mrs. Smith.";

    Here we have a variable called isBirthday — if this is true, we give our guest a happy birthday message; if not, we give her the standard daily greeting. The ternary operator is not just 
    for setting variable values; you can also run functions, or lines of code — anything you like. -- EXAMPLE

      <label for="theme">Select theme: </label>
      <select id="theme">
        <option value="white">White</option>
        <option value="black">Black</option>
      </select>

      <h1>This is my website</h1>
    
      const select = document.querySelector("select");
      const html = document.querySelector("html");
      document.body.style.padding = "10px";

      function update(bgColor, textColor) {
        html.style.backgroundColor = bgColor;
        html.style.color = textColor;
      }

      select.addEventListener("change", () =>
        select.value === "black" ? update("black", "white") : update("white", "black")
      );
*/

// ACTIVE LEARNING: A SIMPLE CALENDAR
const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

select.addEventListener("change", () => {
  const choice = select.value;

  // ADD CONDITIONAL HERE
  days =
    choice === "February"
      ? 28
      : choice === "April" || "June" || "September" || "November"
      ? 30
      : 31;
  createCalendar(days, choice);
});

function createCalendar(days, choice) {
  list.innerHTML = "";
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31, "January");

// ACTIVE LEARNING: MORE COLOR CHOICES
const selectB = document.querySelector("select");
const html = document.querySelector(".output");

selectB.addEventListener("change", () => {
  const choice = selectB.value;

  // ADD SWITCH STATEMENT
  switch (choice) {
    case "white":
      update("black", "white");
      break;

    case "black":
      update("white", "black");
      break;

    case "purple":
      update("yellow", "purple");
      break;

    case "yellow":
      update("purple", "yellow");
      break;

    case "psychedelic":
      update("orange", "psychedelic");
      break;

    default:
      update("white", "black");
  }
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

/*


-----JAVASCRIPT.INFO-----

  MULTIPLE TERNARY OPERATORS
    A sequence of question mark operators ? can return a value that depends on more than one condition.
    
 A}  For instance:

    let age = prompt('age?', 18);
    let message = (age < 3) ? 'Hi, baby!' :
      (age < 18) ? 'Hello!' :
      (age < 100) ? 'Greetings!' :
      'What an unusual age!';
    alert( message );

 B)  Here’s how this looks using if..else:

    if (age < 3) {
      message = 'Hi, baby!';
    } else if (age < 18) {
      message = 'Hello!';
    } else if (age < 100) {
      message = 'Greetings!';
    } else {
      message = 'What an unusual age!';
    }

 C}  Non-traditional use of ‘?’
     Sometimes the question mark ? is used as a replacement for if:

    let company = prompt('Which company created JavaScript?', '');

    (company == 'Netscape') ?
      alert('Right!') : alert('Wrong.');
    
 D) Here is the same code using if for comparison:

    let company = prompt('Which company created JavaScript?', '');

    if (company == 'Netscape') {
      alert('Right!');
    } else {
      alert('Wrong.');
    }

    */

//  TASK: THE NAME OF JAVASCRIPT
const ANSWER = "ECMAScript";
let reply = prompt('What\'s the "official" name of javascript?');
let resultA = reply == ANSWER ? "Right" : 'You don\'t know "ECMAScript"!';
alert(resultA);

//  TASK: SHOW THE SIGN
let answer = prompt("Enter your number");
resultB = answer > 0 ? 1 : answer < 0 ? -1 : 0;
alert(resultB);

// REWRITE 'IF' INTO '?'
let resultC = a + b < 4 ? "Below" : "Over";

// REWRITE 'IF..ELSE' INTO '?'
let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";

/*

-----JAVASCRIPT.INFO-----

  THE "SWITCH" STATEMENT
    A switch statement can replace multiple if checks. It gives a more descriptive way to compare a value with multiple variants. The switch has one or more case blocks and an 
    optional default.
    
    Type matters
      Let’s emphasize that the equality check is always strict. The values must be of the same type to match.

      For example, let’s consider the code:

      let arg = prompt("Enter a value?");
      switch (arg) {
        case '0':
        case '1':
          alert( 'One or zero' );
          break;

        case '2':
          alert( 'Two' );
          break;

        case 3:
          alert( 'Never executes!' );
          break;
        default:
          alert( 'An unknown value' );
      }
      For 0, 1, the first alert runs.
      For 2 the second alert runs.
      But for 3, the result of the prompt is a string "3", which is not strictly equal === to the number 3. So we’ve got a dead code in case 3! The default variant will execute.
          
*/

// TASKS: REWRITE THE "SWITCH" INTO AN "IF"
if (browser == "Edge") {
  alert("You've got the Edge!");
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  alert("Okay we support these browsers too");
} else alert("We hope that this page looks ok!");

//TASK: REWRITE "IF" INTO "SWITCH"
let a = +prompt("a?", "");
switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2,3");
    break;
}
