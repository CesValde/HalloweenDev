// n -> total number of victims (seated in positions 0 to n-1) k -> number to count to eliminate the next victim
function surviveRoulette(n, k) {
   let survivor = 0 // base case: J(1, k) = 0

  for (let i = 2; i <= n; i++) {
    survivor = (survivor + k) % i
  }

  return survivor
}