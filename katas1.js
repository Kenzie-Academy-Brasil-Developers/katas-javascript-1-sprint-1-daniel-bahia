function oneThroughTwenty() {
  let result = [];

  for (let i = 1; i <= 20; i++) {
    result[i-1] = i
  }
  return result
}
console.log(oneThroughTwenty())

// fim do primeiro exercício 

function evensToTwenty() {
  let result = []
  for (let i = 2; i <= 20; i += 2) {
    result.push(i)
  }
  return result

}

console.log(evensToTwenty())

  // fim do segundo exercício

function oddsToTwenty() {
 let result = []

  for (let i = 1; i <= 20; i+=2) {
    result.push(i)
  }

  return result

}

console.log(oddsToTwenty())

// fim do terceiro exercicio

function multiplesOfFive() {
  let result =[] 

  for (let i = 5; i <= 100; i+=5) {
    result.push(i)
  }
 return result
}

console.log(multiplesOfFive())

// fim do quarto exercicio

function squareNumbers() {
  let result = []
  let quadradoPerfeito = false
  let i = 1

  while (!quadradoPerfeito) {
    if ((i * i) <= 100) {
        result.push(i * i)
        i++
    } else { 
        quadradoPerfeito = true
    }
  }
  return result
}

 console.log(squareNumbers())

  // fim do quinto exercicio

function countingBackwards() {
  let result = [];

  for (let i = 20; i >= 1; i--) {
    result.push(i)
  }
  return result
}

console.log(countingBackwards())

 // fim do sexto exercicio

function evenNumbersBackwards() {
  let result = [];

  for (let i = 20; i >= 1; i-= 2) {
    result.push(i)
  }
  return result
}

console.log(evenNumbersBackwards())

// fim do setimo exercicio

function oddNumbersBackwards() {
  let result = [];

  for (let i = 19; i >= 1; i-= 2) {
    result.push(i)
  }
  return result
}

console.log(oddNumbersBackwards())

// fim do oitavo exercicio

function multiplesOfFiveBackwards() {
 let result = []

  for (i = 100; i >= 5; i-= 5){
   result.push(i)
}
  return result
}
console.log(multiplesOfFiveBackwards())

// fim do nono exercicio

function squareNumbersBackwards(){
  let novoResult = []
  let result = []
  let quadradoPerfeito = false
  let i = 1

  while (!quadradoPerfeito){
    if ((i * i) <= 100) {
        novoResult.push(i * i)
        i++
    } else { 
        quadradoPerfeito = true;
    }
  }

  for (let t = novoResult.length - 1; t >= 0; t--){
      result.push(novoResult[t])
  }

  return result
}

console.log(squareNumbersBackwards())

// fim do decimo exercicio