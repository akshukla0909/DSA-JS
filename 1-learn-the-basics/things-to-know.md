# These are the basics	

# 1 User Input / Output

**How to take user input output in JS**

In browser env - common ways is prompt or html input tag
but for nodejs environment
Node offers package name - readline

```js
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});

```


# 2 Data Types
<!-- https://javascript.info/types --> visit this website
Data types in js - total 8

String, Number, Boolean, null, undefined, Symbol(to create unique obj key without name clash), BigInt(for integers larger than 2^53 - 1)
Object(Non Primitive), - collection of key value pairs and can include array and function too

| Category      | Data Types                                               |
| ------------- | -------------------------------------------------------- |
| Primitive     | String, Number, BigInt, Boolean, Undefined, Null, Symbol |
| Non-Primitive | Object (includes arrays, functions)                      |


# 3 If Else statements
```js
if(condition){
  // code block here
}
```

# 4 Switch Statement
```js
switch (value) {
  case 1:
    // code block for value === 1
    break; // or return
  case 2:
    // code block for value === 2
    break; // or return
  default:
    // code block if no case matches
    break; // or return
}
Keyword	Use When...
- break: 	You want to exit only the switch block
- return: 	You want to exit the whole function (not just switch)
```

# 5 What are arrays, strings?

array are dynamic data type(object) in js - can store any value(data type) inside it
- Indexed — each item has a numeric index (starting from 0)
- Dynamic — size can grow or shrink
ex- var arr = [1,"a", "12"]
- Arrays are pass by ref in js

strings - string can store one value at a time
String are passed by value in js - its immutable 

# 6 For loops

for loops in js
There are three for loop in JS
classic for loop in JS

```js
// classic for loop -
for(let i = 0; i < n; i++){
  console.log(i);
}

// for each - iterates over an array - does not return anything
// can be useful to iterates over objects(indirectly) - Object.keys() 
// callback fn take upto 3 args
array.forEach( elem =>  console.log(elem) )

// for in - iterates key in Object
for (const key in Object){
  console.log(key)
}

// for of - iterated value in Object
for(const value in Object){
  console.log(value)
}

// for await loop

```

# 7 While loops

# 8 Functions (Pass by Reference and Value)

# 9 Time Complexity [Learn Basics, and then analyse in next Steps]
