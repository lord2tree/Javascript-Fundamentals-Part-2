/*
  -----MDN WEB DOCS-----

  STRINGS:
    Escaping characters in a string:
    To fix our previous problem code line, we need to escape the problem quote mark. Escaping characters means that we do something to them to make sure they are recognized as text, 
    not part of the code. In JavaScript, we do this by putting a backslash just before the character. Try this:

        const bigmouth = 'I\'ve got no right to take my place…';
        console.log(bigmouth);

    TEMPLATE LITERALS
        A template literal looks just like a normal string, but instead of using single or double quote marks (' or "), you use backtick characters (`):
        const greeting = `Hello`;
        
        This can work just like a normal string, except you can include variables in it, wrapped inside ${ } characters, and the variable's value will be inserted into the result:
        const name = "Chris";
        const greeting = `Hello, ${name}`;
        console.log(greeting); // "Hello, Chris"
      
        You can use the same technique to join together two variables:
        const one = "Hello, ";
        const two = "how are you?";
        const joined = `${one}${two}`;
        console.log(joined); // "Hello, how are you?"
      
        You can include JavaScript expressions in template literals, as well as simple variables, and the results will be included in the result:
        const song = "Fight the Youth";
        const score = 9;
        const highestScore = 10;
        const output = `I like the song ${song}. I gave it a score of ${
          (score / highestScore) * 100
        }%.`;
        console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."


        Template literals respect the line breaks in the source code, so you can write strings that span multiple lines like this:
        const output = `I like the song.
        I gave it a score of 90%.`;
        console.log(output);
        // I like the song.
        // I gave it a score of 90%.


  -----W3 SCHOOLS -----

  STRINGS:
    String length
      The length property returns the length of a string: let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; let length = text.length; --- RESULT: 26

    String slice()
      slice() extracts a part of a string and returns the extracted part in a new string. The method takes 2 parameters: start position, and end position (end not included).
          let text = "Apple, Banana, Kiwi";
          let part = text.slice(7, 13);
          
      If you omit the second parameter, the method will slice out the rest of the string: let part = text.slice(7); --- RESULTS: Banana, Kiwi
      If a parameter is negative, the position is counted from the end of the string: let text = "Apple, Banana, Kiwi"; let part = text.slice(-12); --- RESULTS: Banana, Kiwi
      This example slices out a portion of a string from position -12 to position -6: let text = "Apple, Banana, Kiwi"; let part = text.slice(-12, -6); --- RESULTS: Banana

    String substring()
      substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring(). If you omit the second parameter, substring() 
      will slice out the rest of the string. --- EXAMPLE: let str = "Apple, Banana, Kiwi"; let part = str.substring(7, 13); --- RESULTS: Banana
    
    String substr()
      substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part. If you omit the second parameter, substr() will 
      slice out the rest of the string. If the first parameter is negative, the position counts from the end of the string. --- EXAMPLE: let str = "Apple, Banana, Kiwi";
      let part = str.substr(7, 6);  --- RESULTS: Banana

    String replace()
      The replace() method replaces a specified value with another value in a string: let text = "Please visit Microsoft!"; let newText = text.replace("Microsoft", "W3Schools");
      --- RESULTS: Please visit W3Schools! The replace() method does not change the string it is called on. The replace() method returns a new string. The replace() method replaces 
      only the first match. If you want to replace all matches, use a regular expression with the /g flag set(Regular expressions are written without quotes). By default, the replace() 
      method is case sensitive. To replace case insensitive, use a regular expression with an /i flag (insensitive): let text = "Please visit Microsoft!"; 
      let newText = text.replace(/MICROSOFT/i, "W3Schools"); --- RESULTS: Please visit W3Schools! To replace all matches, use a regular expression with a /g flag (global match): 
      let text = "Please visit Microsoft and Microsoft!"; let newText = text.replace(/Microsoft/g, "W3Schools"); --- RESULTS: Please visit Microsoft and Microsoft!

    String replaceAll()
      In 2021, JavaScript introduced the string method replaceAll(): let text = "I love cats. Cats are very easy to love. Cats are very popular." text = text.replaceAll("Cats","Dogs"); 
      text = text.replaceAll("cats","dogs"); --- RESULTS: I love dogs. Dogs are very easy to love. Dogs are very popular. Both the prior replaceAll() method using strings and the method
      using regular expressions will work however only WITH THE GLOBAL FLAG g which MUST be set, otherwise a type error will occur.  --- EXAMPLE: text = text.replaceAll(/Cats/g,"Dogs"); 
      text = text.replaceAll(/cats/g,"dogs");

    String toUpperCase()
      A string is converted to upper case with toUpperCase(): let text1 = "Hello World!"; let text2 = text1.toUpperCase(); --- RESULTS: "HELLO WORLD!"

    String toLowerCase()
      A string is converted to lower case with toLowerCase(): let text1 = "Hello World!"; let text2 = text1.toLowerCase(); --- RESULTS: "hello world!" 

    String concat()
      concat() joins two or more strings like the plus operator.: let text1 = "Hello"; let text2 = "World"; let text3 = text1.concat(" ", text2); --- RESULTS: Hello World!

    String trim()
      The trim() method removes whitespace from both sides of a string: let text1 = "      Hello World!      "; let text2 = text1.trim(); --- RESULTS: 'Hello World!' (THERE IS NO SPACE 
      BEFORE AND AFTER THE HELLO WORLD STRING ALSO QUOTES ARE NOT ACTUALLY TO THE LEFT AND RIGHT OF STRING AND ONLY HERE TO DEPICT THAT THERE IS NO SPACE LEFT AND RIGHT OF STRING)

    String trimStart()
      ECMAScript 2019 added the String method trimStart() to JavaScript. The trimStart() method works like trim(), but removes whitespace only from the start of a string. --- EXAMPLE: 
      let text1 = "     Hello World!     "; let text2 = text1.trimStart(); --- RESULTS: 'Hello World!     ' (THERE IS NO SPACE BEFORE THE HELLO WORLD STRING ALSO QUOTES ARE NOT ACTUALLY 
      TO THE LEFT AND RIGHT OF STRING AND ONLY HERE TO DEPICT THAT THERE IS NO SPACE TO THE RIGHT OF STRING)

    String trimEnd()
      ECMAScript 2019 added the string method trimEnd() to JavaScript. The trimEnd() method works like trim(), but removes whitespace only from the end of a string. --- EXAMPLE: 
      let text1 = "     Hello World!     "; let text2 = text1.trimEnd(); --- RESULTS: '     Hello World!' (THERE IS NO SPACE AFTER THE HELLO WORLD STRING ALSO QUOTES ARE NOT ACTUALLY 
      TO THE LEFT AND RIGHT OF STRING AND ONLY HERE TO DEPICT THAT THERE IS NO SPACE TO THE RIGHT OF STRING)

    String padStart()
      ECMAScript 2017 added padStart() method to JavaScript to support padding at the beginning of a string. The padStart() method pads a string from the start. It pads a string with 
      another string (multiple times) until it reaches a given length. --- EXAMPLE: Pad a string with "0" until it reaches the length 4: let text = "5"; let padded = text.padStart(4,"0");
      --- RESULTS: 0005 --- Note: The padStart() method is a string method. To pad a number, convert the number to a string first.
    
    String padEnd()
      ECMAScript 2017 added padEnd() method to JavaScript to support padding at the end of a string. The padEnd() method pads a string from the end. It pads a string with 
      another string (multiple times) until it reaches a given length. --- EXAMPLE: Pad a string with "x" until it reaches the length 4: let text = "5"; 
      let padded = text.padEnd(4,"x"); --- RESULTS: 5xxx --- Note: The padEnd() method is a string method. To pad a number, convert the number to a string first.
      
    String charAt()
      The charAt() method returns the character at a specified index (position) in a string: let text = "HELLO WORLD"; let char = text.charAt(0); --- RESULTS: H

    String charCodeAt()
      The charCodeAt() method returns the unicode of the character at a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535). --- EXAMPLE: 
      let text = "HELLO WORLD"; let char = text.charCodeAt(0); --- RESULTS: 72

    Property Access
      EXAMPLE: let text = "HELLO WORLD"; let char = text[0]; --- RESULTS: H --- Note Property access might be a little unpredictable: It makes strings look like arrays (but they are not).
      If no character is found, [ ] returns undefined, while charAt() returns an empty string. It is READ ONLY. str[0] = "A" gives no error (but does not work!) --- EXAMPLE: 
      let text = "HELLO WORLD"; text[0] = "A";    // Gives no error, but does not work because you cannot assign a value and can ONLY READ. 

    String split()
      NOTE: If you want to work with a string as an array, you can convert it to an array. A string can be converted to an array with the split() method: text.split(",") // Split on commas,
      text.split(" ") // Split on spaces and text.split("|") // Split on pipe. let text = "a,b,c,d,e,f"; const myArray = text.split(","); console.log(myArray[0]); --- RESULTS: a 
      If the separator is omitted, the returned array will contain the whole string in index [0]. If the separator is "", and the array has all commas removed the returned array will be 
      an array of single characters: 
      --- RESULTS:
      a
      b
      c
      d
      e
      f  
   
   
  STRING REFERENCES: 
    String Properties and Methods
    Normally, strings like "John Doe", cannot have methods or properties because they are not objects.

    But with JavaScript, methods and properties are also available to strings, because JavaScript treats strings as objects when executing methods and properties.

    JavaScript String Methods
    Name	Description
    charAt()	Returns the character at a specified index (position)
    charCodeAt()	Returns the Unicode of the character at a specified index
    concat()	Returns two or more joined strings
    constructor	Returns the string's constructor function
    endsWith()	Returns if a string ends with a specified value
    fromCharCode()	Returns Unicode values as characters
    includes()	Returns if a string contains a specified value
    indexOf()	Returns the index (position) of the first occurrence of a value in a string
    lastIndexOf()	Returns the index (position) of the last occurrence of a value in a string
    length	Returns the length of a string
    localeCompare()	Compares two strings in the current locale
    match()	Searches a string for a value, or a regular expression, and returns the matches
    prototype	Allows you to add properties and methods to an object
    repeat()	Returns a new string with a number of copies of a string
    replace()	Searches a string for a value, or a regular expression, and returns a string where the values are replaced
    search()	Searches a string for a value, or regular expression, and returns the index (position) of the match
    slice()	Extracts a part of a string and returns a new string
    split()	Splits a string into an array of substrings
    startsWith()	Checks whether a string begins with specified characters
    substr()	Extracts a number of characters from a string, from a start index (position)
    substring()	Extracts characters from a string, between two specified indices (positions)
    toLocaleLowerCase()	Returns a string converted to lowercase letters, using the host's locale
    toLocaleUpperCase()	Returns a string converted to uppercase letters, using the host's locale
    toLowerCase()	Returns a string converted to lowercase letters
    toString()	Returns a string or a string object as a string
    toUpperCase()	Returns a string converted to uppercase letters
    trim()	Returns a string with removed whitespaces
    trimEnd()	Returns a string with removed whitespaces from the end
    trimStart()	Returns a string with removed whitespaces from the start
    valueOf()	Returns the primitive value of a string or a string object
    Note
    All string methods return a new value.

    They do not change the original variable.

    String HTML Wrapper Methods
    HTML wrapper methods return a string wrapped inside an HTML tag.

    These are not standard methods, and may not work as expected.

    Method	Description
    anchor()	Displays a string as an anchor
    big()	Displays a string using a big font
    blink()	Displays a blinking string
    bold()	Displays a string in bold
    fixed()	Displays a string using a fixed-pitch font
    fontcolor()	Displays a string using a specified color
    fontsize()	Displays a string using a specified size
    italics()	Displays a string in italic
    link()	Displays a string as a hyperlink
    small()	Displays a string using a small font
    strike()	Displays a string with a strikethrough
    sub()	Displays a string as subscript text
    sup()	Displays a string as superscript text

    REFERENCES: (https://www.w3schools.com/jsref/jsref_obj_string.asp)
    AN EXHAUSTIVE LIST OF METHODS THAT CAN BE USED ON STRINGS CAN BE FOUND HERE ---> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

*/
