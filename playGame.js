function changeLock(current, target) {
   if(current === target) return 0

   let movements = 0
   const WHEEL_SIZE = 10

    for(let i = 0; i < current.length; i++) {
      const currentDigit = current[i]
      const targetNumber = target[i]

      let diff = Math.abs(targetNumber - currentDigit)
      // Circular adjustment: if it is faster to go backward
      if(diff > WHEEL_SIZE / 2) {
         diff = WHEEL_SIZE - diff
      }
      movements += diff
   }

    return movements
}

const result = changeLock('0022', '0044')
console.log(result)
// → 4
// Wheel 2: 2→4 (2 moves forward)
// Wheel 3: 2→4 (2 moves forward)
// Total: 2+2 = 4