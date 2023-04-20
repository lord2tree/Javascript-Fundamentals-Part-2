/*

-----JAVASCRIPT.INFO-----

Data types:
There are eight basic data types in JavaScript. We can put any type in a variable. Programming languages that allow such things, such as JavaScript, are called “dynamically typed”, 
meaning that there exist data types, but variables are not bound to any of them.

1)  NUMBER:
      The number type represents both integer and floating point numbers. Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: 
      Infinity, -Infinity and NaN. Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number. NaN represents a computational error. It is 
      a result of an incorrect or an undefined mathematical operation. 

2)  BIGINT:
      In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives. For most purposes 
      ±(253-1) range is quite enough, but sometimes we need the entire range of really big integers. BigInt type was recently added to the language to represent integers of arbitrary 
      length. A BigInt value is created by appending n to the end of an integer like so "const bigInt = 1234567890123456789012345678901234567890n;"

3)  STRING:
      A string in JavaScript must be surrounded by quotes. In JavaScript, there are 3 types of quotes. One, Double quotes: "Hello". Two, Single quotes: 'Hello'. and three Backticks: 
      `Hello`. Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript. Backticks are “extended functionality” quotes. They allow 
      us to embed variables and expressions into a string by wrapping them in ${…}.
      EXAMPLE:
        let name = "John";

        // embed a variable
        alert( `Hello, ${name}!` ); // Hello, John!

        // embed an expression
        alert( `the result is ${1 + 2}` ); // the result is 3

4)  BOOLEAN:
      The boolean type has only two values: true and false. This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.
      EXAMPLES:
        let nameFieldChecked = true; // yes, name field is checked
        let ageFieldChecked = false; // no, age field is not checked

        Boolean values also come as a result of comparisons:
        let isGreater = 4 > 1;
        alert( isGreater ); // true (the comparison result is "yes")

5)  NULL:
      The “null” value
      The special null value does not belong to any of the types described above. It forms a separate type of its own which contains only the null value: 
      
      let age = null;

      In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages. It’s just a special value which represents “nothing”, 
      “empty” or “value unknown”. The code above states that age is unknown.


6)  UNDEFINED:
      The special value undefined also stands apart. It makes a type of its own, just like null. The meaning of undefined is “value is not assigned”. If a variable is declared, 
      but not assigned, then its value is undefined:

      let age;
      alert(age); // shows "undefined"

      Technically, it is possible to explicitly assign undefined to a variable:

      let age = 100;
      // change the value to undefined
      age = undefined;
      alert(age); // "undefined"
    
      But we don’t recommend doing that. Normally, one uses null to assign an “empty” or “unknown” value to a variable, while undefined is reserved as a default initial value for 
      unassigned things.


7)  OBJECTS & SYMBOLS:
      The object type is special. All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, 
      objects are used to store collections of data and more complex entities such as:
          A)  Arrays: a type of object used to store an ordered collection of data.
          B)  Functions: a type of object used to store executable code.
          C)  Dates: a type of object used to store a specific date and time.
          D)  Regular expressions: a type of object used to match patterns in strings.
          E)  Custom objects: objects created by the programmer to store any type of data or functionality they need.
          
      The symbol type is used to create unique identifiers for objects. In JavaScript, a symbol is a unique identifier that can be used as a property key. You can create a symbol 
      by calling the Symbol() function, like this:

            const mySymbol = Symbol();

            You can also provide an optional description string to the Symbol() function, like this:

            const mySymbol = Symbol('This is my symbol');

      That's it! Symbols are useful for creating unique keys that won't conflict with other keys in an object, even if they have the same name. Lastly Symbols can create private properties 
      and methods in JavaScript that are inaccessible from outside the object. It's like having a secret room with a special key only you possess.


8)  TYPEOF:
       The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.
       EXAMPLE: 
        typeof Math // "object"  (1)
        typeof null // "object"  (2)
        typeof alert // "function"  (3)

        The last three lines may need additional explanation:
        A)  Math is a built-in object that provides mathematical operations. We will learn it in the chapter Numbers. Here, it serves just as an example of an object.

        B)  The result of typeof null is "object". That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility. 
            Definitely, null is not an object. It is a special value with a separate type of its own. The behavior of typeof is wrong here.
            
        C)  The result of typeof alert is "function", because alert is a function. We’ll study functions in the next chapters where we’ll also see that there’s no special 
            “function” type in JavaScript. Functions belong to the object type. But typeof treats them differently, returning "function". That also comes from the early 
            days of JavaScript. Technically, such behavior isn’t correct, but can be convenient in practice.


*/
