// patterns

// A basic sqaure patter
function squareStar(number = 5){
    for(let i = 0; i < number; i++){
      let print = ""
      for(let j = 0; j < number; j++){
        print = print + "* "
    }
    console.log(print)
  }
}

squareStar(3)