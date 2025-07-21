// Learn the Basic Recursion - 7 Ques

// As much as I know about recursion a function calling itself for the no of times

// Print something n times to understand recursion

// You have to be very care full for recursion to put when and how to stop
function printSomething(value, number){
    if(number === 0) return
    console.log(value)
    printSomething(value, number-1);
}

// printSomething("Hello Akash", 5)

function printNumber(number){
    if(number === 0) return
    printNumber(number-1);
    console.log(number)
}

printNumber(4)
