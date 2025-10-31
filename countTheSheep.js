function countSheep(letters) {
   let countS = 0
   let countH = 0
   let countE = 0
   let countP = 0

   for(let chart of letters) {
      if(chart === 's') countS++
      if(chart === 'h') countH++
      if(chart === 'e') countE++
      if(chart === 'p') countP++
   }

   let sheeps = 0

   while(countE >= 2 && countS >= 1 && countH >= 1 && countP >= 1) {
      sheeps++

      countE -= 2
      countS -= 1
      countH -= 1
      countP -= 1
   }

   return sheeps
}

const result = countSheep('sheep')
console.log(result)