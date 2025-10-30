function translatePossessed (message) {
   if(message.trim() == '') return ''

   let palabras = message.split(' ')
   palabras = palabras.map(palabra => palabra.split("").reverse().join("")).join(" ")

   return palabras
}

/* Test */
const message = 'i yojne gnihctaw uoy'
const result = translatePossessed(message)
console.log(result)