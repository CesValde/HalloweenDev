function myersCalendar(year) {
   if(!Number.isFinite(year) || year == -1 || year == 0) return []

   const halloween = `${year}-10-31`
   const deadDays = [halloween]
   const FRIDAY_13 = 13
   const DAY_FRIDAY = 5
   
   for(let i=1 ; i < 13 ; i++) {
      let date = new Date(`${year}-${i + 1}-${FRIDAY_13}`)
         if(date.getDay() == DAY_FRIDAY) {
            // Format with leading zeros if necessary
            const month = String(i + 1).padStart(2, '0')
            const day = String(FRIDAY_13).padStart(2, '0')

            const date = new Date(year, month - 1, day).toLocaleDateString('en-CA')
            deadDays.push(date)
         }
   }

   // sort the array
   deadDays.sort()
   return deadDays
}

const result = myersCalendar(2025)
console.log(result)