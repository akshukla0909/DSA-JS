// Lec 4 - Know the basic maths

// 1- count digits

function countDigits(number){
    let count = 0;
    while(number > 0){
        number = Math.floor(number/10)
        count++
    }
    return count
}

// console.log("digit count is --", countDigits(23456))

// 2 - Reverse a Number

function reverseNumber(number){
    let newNumber = 0;
    while(number > 0){
      const rem = number%10
      newNumber = newNumber*10 + rem;
      number = Math.floor(number/10) 
    }
    return newNumber;
}

// console.log("Reverse the number--", reverseNumber(23456))

function checkPalindrome(number){
   const originalNumber = number;
   const reversedNumber = reverseNumber(number);

   const isPalindrome = originalNumber === reversedNumber ? true : false
  
   return isPalindrome;
}

// console.log("Is number is palindrom--", checkPalindrome(121))

function HCF(a, b){

  // the bruteforce approach
  // -- 0 - 12(Math.min -- HCF always less than smalller number)
  // we will check for all 0 to 12 one by one for both divisiblty
  // as soon we get we will assign and keep doing it till for 12

  // we will use euclidean algo (divide big with small untill we rem 0 - 4/2 )
  while(b !== 0){
    let temp = b;
    b = a%b
    a = temp;
  }
  return a 
}
// console.log("GCD or HCF of number" , HCF(12,18))

//Formula -- HCF(a, b) × LCM(a, b) = a × b

function LCM(a, b){
  // lcm is least common multiple 
  // for 12 and 18 start from 18 
  // keep dividing that num by both 12,18 - 
  // increase the divider++ untill num gets diveded by both, that is your lcm - once both divide
  let lcm = Math.max(a,b)
  while(true){
    if(lcm%a === 0 && lcm%b === 0){
      return lcm
    }
    lcm++
  }
}

// console.log("LCM is--", LCM(12,18))

function armStrong(number){
  // 153 = 1³ + 5³ + 3³. - number cubes is sum is eq to num
  
}

// print all divisors

function isPrime(number){
  // a function is prime if it is div by 1 or its own like 7, 11 etc but 1 is not prime
  if(number <= 1){
    return false
  }

  // good thing is that ki if a number is not prime - possibly iska div bahut pahle exist krta either webkit-line-break: 
  // even or odd and its more like its root sq tak hi mila jayega - nahi to vo prime hi hoga

  for(let i = 2; i <= Math.sqrt(number); i++){
    if(number % i === 0){
      return false;
    }
  }

  return true
}

console.log("Check prime number", isPrime(5))
